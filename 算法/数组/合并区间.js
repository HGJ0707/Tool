/**
 * 56. 合并区间
 * @param {*} intervals 
 * @returns 
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [];
    let pre = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i];
        if (cur[0] > pre[1]) {
            res.push(pre);
            pre = cur;
        } else {
            pre[1] = Math.max(pre[1], cur[1]);
        }
    }
    res.push(pre);
    return res;
}




