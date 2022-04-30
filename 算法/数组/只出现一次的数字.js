/**
 * 136. 只出现一次的数字
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // const pro = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if (!pro[nums[i]]) {
    //         if (nums.slice(i + 1).indexOf(nums[i]) < 0) {
    //             return nums[i];
    //         }
    //     }
    //     pro[nums[i]] = true;
    // }

    // 异或运算有以下三个性质。
    // 任何数和 00 做异或运算，结果仍然是原来的数，即 a \oplus 0=aa⊕0=a。
    // 任何数和其自身做异或运算，结果是 00，即 a \oplus a=0a⊕a=0。
    // 异或运算满足交换律和结合律，即 a \oplus b \oplus a=b \oplus a \oplus a=b \oplus (a \oplus a)=b \oplus0=ba⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。
    let ans = 0;
    for (let i of nums) {
        ans ^= i;
    }
    return ans;
};