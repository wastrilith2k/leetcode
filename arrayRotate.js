function rotateArr(arr, d, n) {
  // code here
  return [...arr.slice(d), ...arr.slice(0, d)];
}

console.log(rotateArr([1, 2, 3, 4, 5], 2, 5));
