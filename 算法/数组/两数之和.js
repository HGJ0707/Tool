/**
 * 1. 两数之和
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var towSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < arr.length; i++) {
            if (nums[j] == target - nums[i]) {
                return [i, j];
            }
        }
    }


    var map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let x = target - nums[i];
        if (map.has(x)) {
            return [map.get(x), i];
        }
        map.set(nums[i], i);
    }
}