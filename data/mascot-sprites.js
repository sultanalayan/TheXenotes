/* XENOS NOTES — pixel-mascot sprite data, auto-generated from the design
 * prototype. M = the girl mascot (white hijab, pink & white dress), A =
 * the boy mascot (curly hair, suit). Both are drawn from the same palette
 * + grid format so the floating home-page buttons (SVG) and the in-game
 * character (canvas) render identically. */
window.XENOS_MASCOTS = (function () {
  var PAL = {
    '.': null,
    'H': '#FAFAF8',
    'h': '#DEDAD0',
    'K': '#FFFFFF',
    'S': '#F0C9A0',
    's': '#D9AD82',
    'I': '#3A2A22',
    'W': '#FFFFFF',
    'P': '#E8899A',
    'L': '#965252',
    'B': '#5E3E2E',
    'D': '#F096AF',
    'd': '#CE6C8A',
    'F': '#FFFFFF',
    'G': '#FFD24D',
    'N': '#4A3226',
    'n': '#34231A',
    'J': '#2E3440',
    'j': '#232833',
    'C': '#F5F3EE',
    'T': '#A03B54',
  };
  var WIDTH = 20;
  var M_GRID = [
    '........HHHH........',
    '.......HKKKKH.......',
    '......HKhhhhKH......',
    '....HhSSSSSSSShH....',
    '....HhSBBSSBBShH....',
    '....HhLWISSIWLhH....',
    '....HhSPSSSSPShH....',
    '....HhSSSLLSSShH....',
    '....HhSSSSSSSShH....',
    '....HhSSSSSSSShH....',
    '..HHHHSSSSSSSSHHHH..',
    '...HGGGGGGGGGGGGH...',
    '.....FDDDDDDDDF.....',
    '......FDDDDDDF......',
    '...dDDFFFFDDDDDDd...',
    'dDDDDDDDDDDDDDDDDDDd',
    'dDDDDDDDDDDDDDDDDDDd',
    'dDDDDDDDDDDDDDDDDDDd',
    'ddFFFFFFFFFFFFFFFFdd',
    'dDDDDDDDDDDDDDDDDDDd',
    'ddDDDDDDDDDDDDDDDDdd',
  ];
  var A_GRID = [
    '.......N.NN.N.......',
    '......NNnNNNnN......',
    '.....NnNNNNNNnN.....',
    '....NNnNNNNNNNnN....',
    '....NnSSSSSSSSnN....',
    '.....NSBBSSBBSN.....',
    '......SIWSIWSS......',
    '......SPSSSSPS......',
    '......SSLLLLSS......',
    '......SSSSSSSS......',
    '......SSSSSSSS......',
    '..JJJJCCCCCCCCJJJJ..',
    '..JJJJCTTTTTTCJJJJ..',
    '.JJJJJJCTTTTCJJJJJJ.',
    '.JjJJJJJJTTJJJJJJjJ.',
    'JjJJJJJJJJJJJJJJJJjJ',
    'JjJJJJJJJJJJJJJJJJjJ',
    'JjJJJJJJJJJJJJJJJJjJ',
    'jjjjjjjj....jjjjjjjj',
    '......jj....jj......',
    '......jj....jj......',
    '......nn....nn......',
  ];
  var OUTLINE = '#786C5C';

  // Returns [x0,y0,x1,y1] of the opaque bounding box for a grid (used to
  // trim empty margins when drawing on canvas / sizing the SVG viewBox).
  function bbox(grid) {
    var h = grid.length, w = WIDTH;
    var x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        if (PAL[grid[y][x]]) {
          if (x < x0) x0 = x;
          if (x > x1) x1 = x;
          if (y < y0) y0 = y;
          if (y > y1) y1 = y;
        }
      }
    }
    return [x0, y0, x1, y1];
  }

  function opaqueAt(grid, x, y) {
    if (y < 0 || y >= grid.length || x < 0 || x >= WIDTH) return false;
    return !!PAL[grid[y][x]];
  }

  // Builds an SVG string for a grid: one <rect> per pixel, plus a thin
  // outline layer traced around the silhouette (transparent px adjacent to
  // an opaque px). `unit` = size of one pixel in SVG user units.
  function toSVG(gridName, unit) {
    unit = unit || 1;
    var grid = gridName === 'M' ? M_GRID : A_GRID;
    var h = grid.length, w = WIDTH;
    var rects = [];
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var opaque = PAL[grid[y][x]];
        if (opaque) {
          rects.push('<rect x="' + (x * unit) + '" y="' + (y * unit) + '" width="' + unit + '" height="' + unit + '" fill="' + opaque + '"/>');
        } else if (opaqueAt(grid, x - 1, y) || opaqueAt(grid, x + 1, y) || opaqueAt(grid, x, y - 1) || opaqueAt(grid, x, y + 1)) {
          rects.push('<rect x="' + (x * unit) + '" y="' + (y * unit) + '" width="' + unit + '" height="' + unit + '" fill="' + OUTLINE + '"/>');
        }
      }
    }
    return '<svg viewBox="0 0 ' + (w * unit) + ' ' + (h * unit) + '" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">' + rects.join('') + '</svg>';
  }

  // Draws a grid onto a canvas 2D context at (px,py) with each sprite pixel
  // rendered as `size` real pixels — used by the in-game character sprite.
  function drawOnCanvas(ctx, gridName, px, py, size) {
    var grid = gridName === 'M' ? M_GRID : A_GRID;
    var h = grid.length, w = WIDTH;
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var opaque = PAL[grid[y][x]];
        if (opaque) {
          ctx.fillStyle = opaque;
          ctx.fillRect(px + x * size, py + y * size, size, size);
        } else if (opaqueAt(grid, x - 1, y) || opaqueAt(grid, x + 1, y) || opaqueAt(grid, x, y - 1) || opaqueAt(grid, x, y + 1)) {
          ctx.fillStyle = OUTLINE;
          ctx.fillRect(px + x * size, py + y * size, size, size);
        }
      }
    }
  }

  return {
    PAL: PAL,
    WIDTH: WIDTH,
    M_GRID: M_GRID,
    A_GRID: A_GRID,
    heightOf: function (gridName) { return (gridName === 'M' ? M_GRID : A_GRID).length; },
    bbox: function (gridName) { return bbox(gridName === 'M' ? M_GRID : A_GRID); },
    toSVG: toSVG,
    drawOnCanvas: drawOnCanvas
  };
})();
