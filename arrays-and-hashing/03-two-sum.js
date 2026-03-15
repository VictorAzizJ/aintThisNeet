/**
 * Two Sum
 * https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 *
 * Method: HashMap (one pass)
 * - Think of each number as a ninja entering the squad one by one.
 * - For each ninja, we ask: "Who is the partner needed to hit target?"
 * - If that partner is already in our roster map, mission complete.
 *
 * Time: O(n)
 * Space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // value -> index
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // The teammate we need to combine with nums[i].
    const complement = target - nums[i];

    // If we already saw that teammate, return both indexes.
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    // Add current ninja to the roster for future teammates.
    map.set(nums[i], i);
  }

  // Problem guarantees one answer, but fallback keeps function complete.
  return [];
}

module.exports = { twoSum };
