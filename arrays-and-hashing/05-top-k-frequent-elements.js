/**
 * Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 * Difficulty: Medium
 *
 * Method: Frequency map + bucket sort
 * 1) Count how many times each number appears.
 * 2) Drop each number into a bucket where index = its frequency.
 * 3) Walk buckets from high frequency to low until we pick k numbers.
 *
 * Anime analogy: buckets are ranked arenas.
 * Arena 5 holds fighters seen 5 times, arena 4 seen 4 times, etc.
 * We draft from strongest arena down until the team is full.
 *
 * Time: O(n)
 * Space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  // Step 1: count appearances.
  const freq = new Map();
  for (const n of nums) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }

  // Step 2: bucket index == frequency.
  // Max possible frequency is nums.length.
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of freq) {
    buckets[count].push(num);
  }

  // Step 3: collect from highest frequency first.
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
