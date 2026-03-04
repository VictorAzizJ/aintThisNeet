/**
 * Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * Difficulty: Easy
 *
 * HashSet approach — O(n) time, O(n) space
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

module.exports = { containsDuplicate };
