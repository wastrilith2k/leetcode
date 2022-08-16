function insertSort(arr, n) {
  let index, pointer, key
  for (index = 1; index < n; index++) {
    key = arr[index];
    pointer = index - 1;
    while (pointer >= 0 && arr[pointer] < key) {
      arr[ pointer + 1] = arr[pointer];
      pointer = pointer - 1;
    }
    arr[pointer + 1] = key
  }
}

function insertSort2( arr) {
  let key, index, pointer;
  for (index = 1; index < arr.length; index++) {
    key = arr[index];
    pointer = index - 1;
    while ( pointer >= 0 && arr[pointer] > key) {
      arr[pointer + 1] = arr[pointer];
      pointer = pointer - 1
    }
    arr[pointer + 1] = key
  }
  return arr
}

function insertSort3(arr) {
  let currVal, index, pointer;
  for (index = 1; index < arr.length; index++) {
    currVal = arr[index];
    pointer = index - 1;
    while (pointer >= 0 && arr[pointer] > currVal) {
      arr[pointer + 1] = arr[pointer];
      pointer = pointer - 1;
    }
    arr[pointer + 1] = currVal;
  }
  return arr;
}

function insertSort4(arr) {
  let currVal, index, pointer;
  for (index = 1; index < arr.length; index++) {
    currVal = arr[index];
    pointer = pointer - 1;
    while (pointer >= 0 && arr[pointer] > currVal) {
      arr[pointer + 1] = arr[pointer];
      pointer = pointer - 1
    }
    arr[pointer + 1] = currVal
  }
  return arr;
}

const myArr = [0, -5, 5, -6, 6];
console.log(insertSort(myArr))