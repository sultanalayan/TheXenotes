/* XENOS NOTES — "M & A's Little Game"
 * A tiny jump-and-catch endless runner. One input (tap / click / Space) does
 * both jobs at once: jump to clear a ground obstacle (mandatory — miss it
 * and it's game over), or jump to pass through an airborne star for a
 * score bonus (optional — miss it, nothing happens). Speed ramps up the
 * longer you survive. High score is saved to localStorage by app.js
 * (renderPlayPage), which also owns the intro/game-over screens — this
 * file only owns the canvas loop itself.
 *
 * Public API: window.XenosGame.start(canvas, who, onGameOver), .stop()
 */
window.XenosGame = (function () {
  const W = 500, H = 300;       // internal logical resolution (canvas is CSS-scaled)
  const GROUND_Y = 240;
  const GRAVITY = 1500;         // px/s^2
  const JUMP_VELOCITY = -560;   // px/s
  const PLAYER_X = 56;
  const SPRITE_SIZE = 4;        // canvas px per sprite pixel

  let raf = null;
  let ctx = null;
  let canvas = null;
  let who = 'm';
  let onGameOverCb = null;
  let running = false;

  let player, obstacles, stars, particles, score, speed, elapsed, lastTs;
  let nextObstacleIn, nextStarIn;
  let listenersBound = false;

  function spriteGrid() { return who === 'a' ? 'A' : 'M'; }

  function playerBox() {
    const mascots = window.XENOS_MASCOTS;
    if (!mascots) return { w: 64, h: 84 };
    const bb = mascots.bbox(spriteGrid()); // [x0,y0,x1,y1] in grid cells
    return {
      w: (bb[2] - bb[0] + 1) * SPRITE_SIZE,
      h: (bb[3] - bb[1] + 1) * SPRITE_SIZE,
      gx0: bb[0], gy0: bb[1],
      totalH: mascots.heightOf(spriteGrid()),
    };
  }

  function reset() {
    const box = playerBox();
    player = {
      y: GROUND_Y - box.h,
      vy: 0,
      onGround: true,
      w: box.w, h: box.h,
      gy0: box.gy0, gx0: box.gx0, totalH: box.totalH,
    };
    obstacles = [];
    stars = [];
    particles = [];
    score = 0;
    speed = 210;
    elapsed = 0;
    nextObstacleIn = 1.1;
    nextStarIn = 1.8;
  }

  function jump() {
    if (!running) return;
    if (player.onGround) {
      player.vy = JUMP_VELOCITY;
      player.onGround = false;
    }
  }

  function spawnObstacle() {
    const kinds = [
      { w: 26, h: 30, color: '#A03B54' },  // stacked book
      { w: 20, h: 20, color: '#3A3F49' },  // ink blot
      { w: 34, h: 22, color: '#7E2C40' },  // wide book stack
    ];
    const k = kinds[Math.floor(Math.random() * kinds.length)];
    obstacles.push({ x: W + 10, y: GROUND_Y - k.h, w: k.w, h: k.h, color: k.color });
  }

  function spawnStar() {
    // positioned so only a jump can reach it — sits above ground by roughly
    // the mid-height of a jump arc.
    const y = GROUND_Y - player.h - 46 - Math.random() * 30;
    stars.push({ x: W + 10, y, r: 9, caught: false });
  }

  function aabbHit(ax, ay, aw, ah, bx, by, bw, bh) {
    return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
  }

  function update(dt) {
    elapsed += dt;
    speed = Math.min(210 + elapsed * 14, 520);
    score += dt * speed * 0.05;

    // player physics
    player.vy += GRAVITY * dt;
    player.y += player.vy * dt;
    const groundLevel = GROUND_Y - player.h;
    if (player.y >= groundLevel) {
      player.y = groundLevel;
      player.vy = 0;
      player.onGround = true;
    }

    // spawns
    nextObstacleIn -= dt;
    if (nextObstacleIn <= 0) {
      spawnObstacle();
      nextObstacleIn = Math.max(0.75, 1.5 - elapsed * 0.012) + Math.random() * 0.6;
    }
    nextStarIn -= dt;
    if (nextStarIn <= 0) {
      spawnStar();
      nextStarIn = 1.4 + Math.random() * 1.4;
    }

    // obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      const o = obstacles[i];
      o.x -= speed * dt;
      if (o.x + o.w < -10) { obstacles.splice(i, 1); continue; }
      if (aabbHit(PLAYER_X, player.y, player.w, player.h, o.x, o.y, o.w, o.h)) {
        gameOver();
        return;
      }
    }

    // stars
    for (let i = stars.length - 1; i >= 0; i--) {
      const s = stars[i];
      s.x -= speed * dt;
      if (s.x < -20) { stars.splice(i, 1); continue; }
      if (!s.caught && aabbHit(PLAYER_X, player.y, player.w, player.h, s.x - s.r, s.y - s.r, s.r * 2, s.r * 2)) {
        s.caught = true;
        score += 25;
        for (let p = 0; p < 6; p++) {
          particles.push({
            x: s.x, y: s.y, vx: (Math.random() - 0.5) * 140, vy: (Math.random() - 0.5) * 140 - 40,
            life: 0.5, color: Math.random() > 0.5 ? '#FFD24D' : '#A03B54',
          });
        }
        stars.splice(i, 1);
      }
    }

    // particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life -= dt;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 400 * dt;
    }
  }

  function drawStar(cx, cy, r, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha == null ? 1 : alpha;
    ctx.fillStyle = '#FFD24D';
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const outerA = -Math.PI / 2 + i * (Math.PI * 2 / 5);
      const innerA = outerA + Math.PI / 5;
      ctx.lineTo(cx + Math.cos(outerA) * r, cy + Math.sin(outerA) * r);
      ctx.lineTo(cx + Math.cos(innerA) * r * 0.45, cy + Math.sin(innerA) * r * 0.45);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, W, H);

    // ground line
    ctx.fillStyle = '#B9A88C';
    ctx.fillRect(0, GROUND_Y, W, 3);
    // scrolling ground ticks for a sense of speed
    const tickSpacing = 34;
    const offset = (elapsed * speed) % tickSpacing;
    ctx.fillStyle = '#D8CBB0';
    for (let x = -tickSpacing + (tickSpacing - offset); x < W; x += tickSpacing) {
      ctx.fillRect(x, GROUND_Y + 5, 14, 3);
    }

    // obstacles
    obstacles.forEach(o => {
      ctx.fillStyle = o.color;
      ctx.fillRect(o.x, o.y, o.w, o.h);
    });

    // stars
    stars.forEach(s => drawStar(s.x, s.y, s.r));

    // particles
    particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.life / 0.5);
      ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
      ctx.globalAlpha = 1;
    });

    // player sprite
    if (window.XENOS_MASCOTS) {
      window.XENOS_MASCOTS.drawOnCanvas(
        ctx, spriteGrid(),
        PLAYER_X - player.gx0 * SPRITE_SIZE,
        player.y - player.gy0 * SPRITE_SIZE,
        SPRITE_SIZE
      );
    }

    // HUD (drawn on canvas too, in case the DOM HUD is out of view)
    ctx.fillStyle = 'rgba(38,43,54,0.75)';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Score: ' + Math.floor(score), 10, 22);

    const domScore = document.getElementById('play-hud-score');
    if (domScore) domScore.textContent = 'Score: ' + Math.floor(score);
  }

  function loop(ts) {
    if (!running) return;
    const dt = Math.min((ts - lastTs) / 1000, 0.05); // clamp to avoid huge jumps on tab-refocus
    lastTs = ts;
    update(dt);
    if (!running) return; // update() may have called gameOver()
    render();
    raf = requestAnimationFrame(loop);
  }

  function gameOver() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = null;
    const finalScore = Math.floor(score);
    let best = 0;
    try { best = parseInt(localStorage.getItem('xenos-game-highscore'), 10) || 0; } catch (e) {}
    const isNewHigh = finalScore > best;
    if (isNewHigh) {
      best = finalScore;
      try { localStorage.setItem('xenos-game-highscore', String(best)); } catch (e) {}
    }
    if (onGameOverCb) onGameOverCb(finalScore, best, isNewHigh);
  }

  function bindInput() {
    if (listenersBound) return;
    listenersBound = true;
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onPointer);
    document.addEventListener('touchstart', onPointer, { passive: true });
  }
  function unbindInput() {
    listenersBound = false;
    window.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('click', onPointer);
    document.removeEventListener('touchstart', onPointer);
  }
  function onKeyDown(e) {
    if (e.code === 'Space' && running) { e.preventDefault(); jump(); }
  }
  function onPointer(e) {
    if (!running) return;
    const wrap = document.getElementById('play-canvas-wrap');
    if (wrap && wrap.contains(e.target)) jump();
  }

  function start(canvasEl, whoParam, onGameOver_) {
    stop(); // in case one is already running
    canvas = canvasEl;
    who = whoParam === 'a' ? 'a' : 'm';
    onGameOverCb = onGameOver_ || null;
    canvas.width = W;
    canvas.height = H;
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    reset();
    running = true;
    lastTs = performance.now();
    bindInput();
    raf = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = null;
    unbindInput();
  }

  return { start, stop };
})();
