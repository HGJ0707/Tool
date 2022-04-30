/**
 * 169. 多数元素
 * @param {*} nums 
 * @returns 
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};