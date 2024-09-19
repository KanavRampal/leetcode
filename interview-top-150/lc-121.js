prices = [7,1,5,3,6,4];

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = (prices) => {
    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};

console.log(prices);
console.log(maxProfit(prices));