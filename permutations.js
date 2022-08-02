/*/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {
    console.log('**********************', nums);
    const newArray = [];
    let done = false
    let last = -1;
    let iter = 0
    while ((nums.length > 0 && !done)) {
        const curr = nums.pop();
        if (curr < last) {
            const subArray = [];
            newArray.sort((a, b) => a - b).forEach(item => {
                //console.log('item, curr ', item, curr);
                 if (item > curr) {
                        if (!done) {
                    nums.push(item)
                    subArray.push(curr);
                     subArray.forEach(subItem => {
                         nums.push(subItem);
                     });
                    done = true;
} else {
        nums.push(item);
}
                 } else {
                     subArray.push(item)
                 }
                //console.log('subArray, nums', subArray, nums);
            });
            done = true;
        } else {
            newArray.push(curr)
        }
        //console.log('nums, newArray', nums, newArray)
        last = curr;
        iter++;
    }
    if (nums.length === 0) {
        newArray.sort((a,b) => a - b).forEach(item => {
            nums.push(item)
        })
    }
    nums = nums;
};
nums = [1,2,3]
nextPermutation(nums);
console.log(nums)
nums = [2,1,3]
nextPermutation(nums);
console.log(nums)
nums = [3,2,1]
nextPermutation(nums);
console.log(nums)
nums = [1,3,2]
nextPermutation(nums);
console.log(nums)

