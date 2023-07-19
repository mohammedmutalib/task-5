function spotlightMap(grid) {
    function getElementValue(x, y) {
      if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
        return 0;
      }
      return grid[x][y];
    }
  
    const result = [];
    for (let i = 0; i < grid.length; i++) {
      const row = [];
      for (let j = 0; j < grid[i].length; j++) {
        const currentElement = grid[i][j];
        const sum =currentElement +
          getElementValue(i - 1, j) +
          getElementValue(i + 1, j) +
          getElementValue(i, j - 1) +
          getElementValue(i, j + 1);
  
        row.push(sum);
      }
      result.push(row);
    }
    return result;
  }
  
  console.log(spotlightMap([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
  console.log(spotlightMap([[2, 6, 1, 3, 7], [8, 5, 9, 4, 0]]));
  console.log(spotlightMap([[3]]));
  