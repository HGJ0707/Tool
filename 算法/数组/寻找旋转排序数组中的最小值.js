/**
 * 153. 寻找旋转排序数组中的最小值
 * @param {*} nums 
 * @returns 
 */
var findMin = function (nums) {
    //二分法
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}




var findMin = function (nums) {
    //遍历加判断
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return nums[i + 1];
        }
    }
    return nums[0];
}