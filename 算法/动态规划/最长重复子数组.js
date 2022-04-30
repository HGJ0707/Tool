/**
 * 718. 最长重复子数组
 * 参考理解：https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/solution/yi-zhang-biao-ba-ju-hua-kan-dong-dong-tai-gui-hua-/
 * @param {*} nums1 
 * @param {*} nums2 
 */
var findLength = function (nums1, nums2) {
    const dp = new Array(nums1.length + 1).fill(0).map(() => new Array(nums2.length + 1).fill(0));
    let maxSame = 0;
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            maxSame = Math.max(maxSame, dp[i][j]);
        }
    }
    return maxSame;
}