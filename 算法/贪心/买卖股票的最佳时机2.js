/**
 * 122. 买卖股票的最佳时机 II
 * @param {*} prices 
 * @returns 
 */
var maxProfit = function (prices) {
    let maxVal = 0;
    for (let i = 1; i < prices.length; i++) {
        maxVal += Math.max(0, prices[i] - prices[i - 1]);
    }
    return maxVal;
}