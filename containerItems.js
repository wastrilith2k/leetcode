function containerCounts(str, startIndices, endIndices) {
  const max = Math.max(startIndices.length, endIndices.length);

  const answers = [];

  for (idx = 0; idx < max; idx++) {
    const subStr = str.substring(startIndices[idx] - 1, endIndices[idx]);

    const items = subStr.split("|");

    items.pop();
    items.shift();

    console.log(items.join(""));
    answers.push(items.join("").length);
  }

  return answers;
}

console.log(containerCounts("*|**|*|", [1, 5], [6, 3]));
