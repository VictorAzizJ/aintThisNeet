/**
 * Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 * Difficulty: Medium
 *
 * Bucket sort — O(n) time, O(n) space
 * Use a frequency map, then place elements into buckets indexed by their count.
 * Walk buckets from highest to lowest to collect the top k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const freq = new Map();
  for (const n of nums) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }

  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of freq) {
    buckets[count].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for (const num of buckets[i]) {
      result.push(num);
      if (result.length === k) return result;
    }
  }
  return result;
}

module.exports = { topKFrequent };
