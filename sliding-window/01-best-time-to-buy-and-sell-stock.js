/**
 * Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Difficulty: Easy
 *
 * Sliding window vibe:
 * - Left pointer = buy day (cheap day we are betting on)
 * - Right pointer = sell day (today's price)
 *
 * If sell price is higher, we compute profit and keep the best one.
 * If sell price is lower/equal, we found a better buy day, so move left.
 *
 * Time: O(n) | Space: O(1)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let l = 0;
  let r = 1;
  let best = 0;

  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      best = Math.max(best, prices[r] - prices[l]);
    } else {
      // Found a cheaper buy day, reset the window start.
      l = r;
    }
    r++;
  }

  return best;
}

module.exports = { maxProfit };
