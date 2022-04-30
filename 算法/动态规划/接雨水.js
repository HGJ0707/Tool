/**
 * 42. 接雨水
 * @param {*} height 
 * @returns 
 * 
 * 双指针法
 * 
 */
var trap = function (height) {
    let res = 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (height[left] < height[right]) {
            res += leftMax - height[left];
            left++;
        } else {
            res += rightMax - height[right];
            right--;
        }
    }
    return res;
}




/**
 * 动态规划法
 * 
 * 对于下标 i，下雨后水能到达的最大高度等于下标 i 两边的最大高度的最小值，
 * 下标 i 处能接的雨水量等于下标 i 处的水能到达的最大高度减去 height[i]。
 * @param {*} height 
 * @returns 
 */
var trap = function (height) {
    const n = height.length;
    if (n === 0) return 0;

    const leftMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    const rightMax = new Array(n).fill(0);
    rightMax[n - 1] = height[n - 1];
    for (let j = n - 2; j >= 0; j--) {
        rightMax[j] = Math.max(right[j - 1], height[j]);
    }

    let res = 0;
    for (let k = 0; k < n; k++) {
        res += Math.min(leftMax[k], rightMax[k]) - height[k];
    }
    return res;
}


var trap = function (height) {
    let res = 0;

    let leftMax = 0;
    let rightMax = 0;
    let left = 0, right = height.length - 1;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        leftright = Math.max(right, height[right]);

        if (height[left] < height[right]) {
            res += leftMax - height[left];
            left++;
        } else {
            res += rightMax - height[left];
            right--;
        }
    }
    return res;
}