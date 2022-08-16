/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function (s) {
  let maxVar = 0;

  const strChars = s.split("");
  const chars = {};

  strChars.forEach((str) => {
    if (!chars[str]) chars[str] = 0;
    chars[str]++;
  });

  for (l of Object.keys(chars)) {
    for (r of Object.keys(chars)) {
      let remainingL = chars[l];
      if (l == r) continue;

      let freqL = 0;
      let freqR = 0;

      for (idx = 0; idx < s.length; idx++) {
        if (strChars[idx] == r) freqR++;
        if (strChars[idx] == l) {
          freqL++;
          remainingL--;
        }

        if (freqL > 0) maxVar = Math.max(maxVar, freqR - freqL); // See if we are higher than the maxVar

        if (freqR < freqL && remainingL >= 1) {
          freqL = 0;
          freqR = 0;
        }
      }
    }
  }
  return maxVar;
};

const testVal =
  "hdivbekdpvjfczschxwylgmfntolkvapgwszvilwdurfcvmmyjxqlwdawcjhgsjbxwtwitkqlhsmefcfhzfjinssxmrwtcsshetadjvactftrffpehzbeaqinqrfbevhxdyroasrlbdnonchcvfiwznpyimqtiqiwyetrikecrqdusytmvuzqnmdlosxficmqctidfldapympuianbsqfrbooukppwfopcujikagcdkznkdhfjqzdqlevcjwrucwtbrksddvhisvmytztqfuknvhhgalueojjzeiiqdspqkmuuzamywnkjjbtqgzkkhjihfrzmpqqtrrruveexvsoychipadoifkezvkapodkobqlgctzaqcoqwtewfblsbdyyicnbtnqupytomttxtyohvsvlznabzbpzpnwdblaecoeemdzcfwraoujqcwbkkhknpdjd";

console.log(largestVariance(testVal));
