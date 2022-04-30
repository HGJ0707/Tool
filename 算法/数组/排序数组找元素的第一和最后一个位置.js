/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * @param {*} nums 
 * @param {*} target 
 * @param {*} lower 
 * @returns 
 */
const binarySearch = (nums, target, flag) => {
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] > target || (flag && nums[mid] >= target)) {
            right = mid - 1;
            index = mid;
        } else {
            left = mid + 1;
        }
    }
    return index;
}

var searchRange = function (nums, target) {
    let res = [-1, -1];
    // 二分查找中，寻找 leftIdx 即为在数组中寻找第一个大于等于 target 的下标，
    // 寻找 rightIdx 即为在数组中寻找第一个大于target的下标，然后将下标减一。
    const leftIdx = binarySearch(nums, target, true);
    const rightIdx = binarySearch(nums, target, false) - 1;
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        res = [leftIdx, rightIdx];
    }
    return res;
};
