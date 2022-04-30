/**
 * 53. 最大子数组和
 * @param {*} nums 
 * @returns 
 */
// var maxSubArray = function (nums) {
//     let max = nums[0];
//     let prev = 0;
//     for (let i = 1; i < nums.length; i++) {
//         prev = Math.max(prev + nums[i], nums[i]);
//         max = Math.max(prev, max);
//     }
//     return max;
// }



/**
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */

var maxSubArray = function (nums) {
    let max = 0;
    let prev = 0;
    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        if (prev > max) {
            var j = i;
            if (prev == nums[i]) {
                var k = i;
            }
        }
        max = Math.max(prev, max);
    }
    return { max: max, arr: nums.slice(k, j + 1) };
}
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums = [5, 4, -1, 7, 8]
console.log(maxSubArray(nums));