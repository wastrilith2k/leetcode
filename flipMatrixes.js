function swap(matrix, row, col, newRow, newCol) {
  holder = matrix[row][col];
  matrix[row][col] = matrix[newRow][newCol];
  matrix[newRow][newCol] = holder;
}

function flippingMatrix(matrix) {
  // Write your code here
  const n = matrix.length / 2;

  for (let rowOffset = 0; rowOffset < n; rowOffset++) {
    for (let colOffset = 0; colOffset < n; colOffset++) {
      const outerRow = 2 * n - rowOffset - 1;
      const outerCol = 2 * n - colOffset - 1;

      if (matrix[rowOffset][colOffset] < matrix[rowOffset][outerCol]) {
        swap(matrix, rowOffset, colOffset, rowOffset, outerCol);
      }

      if (matrix[rowOffset][colOffset] < matrix[outerRow][colOffset]) {
        swap(matrix, rowOffset, colOffset, outerRow, colOffset);
      }

      if (matrix[rowOffset][colOffset] < matrix[outerRow][outerCol]) {
        swap(matrix, rowOffset, colOffset, outerRow, outerCol);
      }
    }
  }

  return matrix[0][0] + matrix[0][1] + matrix[1][0] + matrix[1][1];
}

const matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

console.log(flippingMatrix(matrix));
