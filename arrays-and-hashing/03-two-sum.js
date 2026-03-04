/**
 * Two Sum
 * https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 *
 * HashMap for complement lookup — O(n) time, O(n) space
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}

module.exports = { twoSum };
