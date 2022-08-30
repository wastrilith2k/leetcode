"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
  // Write your code here
  // Check that it is not zero length
  if (s.length == 0) return -1;

  // Create a string that is the reverse of the current string to only have to
  // do the array sorting once
  const reverseString = s.split("").reverse().join("");
  // Is it already a palindrome
  if (s == reverseString) {
    return -1;
  }

  // Store the max index of the string in a var for easier reference
  // and readability
  const maxIdx = s.length - 1;

  // Check each character in the string and see if removing it resolves the issue.
  for (let i = 0; i < s.length; i++) {
    // Forward string with character removed
    const testA = s.substring(0, i) + s.substring(i + 1);
    // Reversed string with character removed at the same index, just reversed
    const testB =
      reverseString.substring(0, maxIdx - i) +
      reverseString.substring(maxIdx - i + 1);
    // If they are now a palindrome, return this index
    if (testA == testB) {
      return i;
    }
  }

  // No solution, return this index,
  return -1;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    const result = palindromeIndex(s);

    ws.write(result + "\n");
  }

  ws.end();
}
