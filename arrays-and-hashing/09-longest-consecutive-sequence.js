/**
 * Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Difficulty: Medium
 *
 * HashSet approach — O(n) time, O(n) space
 * Only start counting from sequence beginnings (numbers with no left neighbour).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const set = new Set(nums);
  let best = 0;

  for (const n of set) {
    if (set.has(n - 1)) continue;

    let len = 1;
    while (set.has(n + len)) len++;
    best = Math.max(best, len);
  }

  return best;
}

module.exports = { longestConsecutive };
