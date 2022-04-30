/**
 * 121. 买卖股票的最佳时机
 * @param {*} prices 
 * @returns 
 */
var maxProfit = function (prices) {
    let maxValue = 0;
    let minValue = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minValue) {
            minValue = prices[i];
            continue;
        }
        maxValue = Math.max(maxValue, prices[i] - minValue);
    }
    return maxValue;
}



