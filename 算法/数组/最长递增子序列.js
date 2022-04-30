/**
 * 300. 最长递增子序列
 * @param {*} nums 
 * @returns 
 */
const lengthOfLIS = (nums) => {
    const dp = new Array(nums.length).fill(1);
    let maxLen = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLen = Math.max(dp[i], maxLen);
    }
    return maxLen;
}


