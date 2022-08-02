function spiral(n) {
  const result = [];
  let directionIdx = 0;
  let count = 1;
  const direction = () => {
    return Object.keys(directions)[directionIdx];
  };

  for (i = 0; i < n; i++) {
    result[i] = [];
  }

  const directions = {
    e: { x: 1, y: 0 },
    s: { x: 0, y: 1 },
    w: { x: -1, y: 0 },
    n: { x: 0, y: -1 },
  };

  let x = 0;
  let y = 0;

  while (count <= n * n) {
    result[x][y] = count;
    let newX = x + directions[direction()].x;
    let newY = y + directions[direction()].y;

    if (
      newX < 0 ||
      newX > n - 1 ||
      newY < 0 ||
      newY > n - 1 ||
      result[newX][newY] !== undefined
    ) {
      directionIdx = directionIdx < 3 ? directionIdx + 1 : 0;
    }
    x = x + directions[direction()].x;
    y = y + directions[direction()].y;
    count++;
  }
  for (col = 0; col < n; col++) {
    let rawStr = "";
    for (row = 0; row < n; row++) {
      rawStr = `${rawStr} ${result[row][col]}`;
    }
    console.log(rawStr);
  }
}

spiral(5);
