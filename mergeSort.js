function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) return unsortedArray;
  const middle = Math.floor(unsortedArray.length / 2)
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);
  return mergeArr(mergeSort(left), mergeSort(right))
}

function mergeArr(leftArr, rightArr) {
  let leftIdx = 0;
  let rightIdx = 0;
  let index = 0;
  const resultsArr = [];

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] < rightArr[rightIdx]) {
      resultsArr[index] = leftArr[leftIdx]
      leftIdx++;
    } else {
      resultsArr[index] = rightArr[rightIdx]
      rightIdx++;
    }
    index++
  }
  leftArr.slice(leftIdx).forEach(item => resultsArr.push(item))
  rightArr.slice(rightIdx).forEach(item => resultsArr.push(item))

  return resultsArr;
}

const myArr = [-4, 9, 1, -8, 4, -7, 10, -99, 0, 4, 1, 7];

console.log(mergeSort(myArr));