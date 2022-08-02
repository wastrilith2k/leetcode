/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // Pop the first interval off and put it in a new array
  const newIntervals = [];
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  newIntervals.push(sortedIntervals[0]);
  // Loop through each remaining interval
  console.log("sorted", sortedIntervals);
  while (sortedIntervals.length > 0) {
    // Compare the selected interval to each interval in the new array
    console.log(newIntervals);
    const currIter = sortedIntervals.shift();
    // If either position of the selected interval is inclusively between the
    // first and second positions of the queried interval, they overlap
    let overlap = false;
    console.log("*************");
    newIntervals.forEach((targetIter, idx) => {
      if (
        (currIter[0] >= targetIter[0] && currIter[0] <= targetIter[1]) ||
        (currIter[1] >= targetIter[0] && currIter[1] <= targetIter[1])
      ) {
        // Compare first positions to see which is lower and should be first
        if (currIter[0] < targetIter[0]) newIntervals[idx][0] = currIter[0];
        // Compare last positions to see which is lower and should be last
        if (currIter[1] > targetIter[1]) newIntervals[idx][1] = currIter[1];
        overlap = true;
      }
    });
    if (!overlap) newIntervals.push(currIter);
    // If there is no overlap, add the interval to the new array
  }
  // Return the new array
  return newIntervals;
};

console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5],
  ])
);
