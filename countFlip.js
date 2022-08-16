function countFlip(binaryString, requests) {
  const binaryArray = binaryString.split("").map((i) => (i == "1" ? 1 : 0));

  const answers = [];

  for (answerIdx = 0; answerIdx < requests.length; answerIdx++) {
    if (requests[answerIdx] == "flip") {
      const endIdx = binaryArray.indexOf(0);
      for (i = 0; i <= endIdx; i++) {
        binaryArray[i] = binaryArray[i] == 1 ? 0 : 1;
      }
      answers[answerIdx] = endIdx;
    }

    if (requests[answerIdx] == "count") {
      answers[answerIdx] = 0;
      for (i = 0; i < binaryString.length; i++) {
        if (binaryArray[i] == 1) {
          answers[answerIdx]++;
        }
      }
    }
  }
  return answers;
}

console.log(countFlip("101000", ["count", "flip", "flip", "flip", "count"]));
