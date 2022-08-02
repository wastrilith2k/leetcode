
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let trapped = 0;
    let collecting = false
    let walled = false
    let tempCount = 0
    let agg = []

    const maxHeight = [...height].sort((a,b) => a - b)[height.length - 1]
    // console.log(maxHeight)
    // iterate over each height
    for (currHeight = 1; currHeight <= maxHeight; currHeight++) {
        agg[currHeight] = []
        // iterate over each row
        collecting = false;
        walled = false;
        tempCount = 0
        for (x = 0; x < height.length; x++) {
            if (height[x]>= currHeight) {
                if (collecting) {
                    trapped = trapped + tempCount
                    tempCount = 0
                } else {
                    collecting = true
                }
                walled = true
                agg[currHeight].push('W')
            } else { 
                if (walled) {
                    walled = false;
                    collecting = true;
                }
                if (collecting) {
                    tempCount++
                }
                agg[currHeight].push(' ')
            }
        }
        // console.log(agg[currHeight]);
    }
    const revAgg = agg.reverse();
    revAgg.forEach(row => {
        console.log(row.join(''));
    })
    return trapped;
};

console.log('*******');
trap([0,1,0,2,1,0,1,3,2,1,2,1])
trap([4,2,0,3,2,5])
