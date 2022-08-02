/*

Question 2: Look and Say
Implement a function that outputs the Look and Say sequence:
1
11
21
1211
111221
312211
13112221
1113213211
31131211131221
13211311123113112211
Solution
This problem is fairly straightforward and should not take a long time to solve. However, be sure you do proper error checking of the input first! (Empty and invalid inputs should be taken into account). Additionally, you can ask yourself:
How does the output length scale?
What is the max single digit that can exist in the output?
What is the only starting sequence that never grows in length?

*/
function lookAndSay(iterations) {
  const results = ["1"];
  while (results.length < iterations) {
    // Store the initial value
    let currStr = "";
    // Convert it to an array
    const currVal = results[results.length - 1];
    const currRes = currVal.split("");
    // Set the first number to the target
    let target = -1;
    let targetCount = 1;
    currRes.forEach((item) => {
      if (target !== item) {
        if (target !== -1) currStr = `${currStr}${targetCount}${target}`;
        targetCount = 1;
        target = item;
      } else {
        targetCount = targetCount + 1;
      }
    });
    currStr = `${currStr}${targetCount}${target}`;
    results.push(currStr);
  }
  return results;
}

console.log(lookAndSay(10).join("\n"));
