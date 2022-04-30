/**
 * 88. 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * 注意下标判断要 >=0 （可能为-1）
 * 
 */

 var merge = function(nums1, m, nums2, n) {
    let pm = m - 1;
    let pn = n - 1;
    let len = nums1.length - 1;
    while(pm >= 0 && pn >= 0) {
        nums1[len--] = nums1[pm] > nums2[pn] ? nums1[pm--] : nums2[pn--];
    }
    while(pn >= 0) {
        nums1[len--] = nums2[pn--];
    }
};