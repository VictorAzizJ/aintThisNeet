/**
 * Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Difficulty: Medium
 *
 * Two pointers — O(n) time, O(1) space
 * Since the array is already sorted, start one pointer at each end.
 * If the sum is too big, scoot the right pointer left; too small, nudge
 * the left pointer right. The sorted order guarantees we'll converge on
 * the answer without ever needing a hash map.
 */

/**
 * @param {number[]} numbers - 1-indexed sorted array
 * @param {number} target
 * @return {number[]} 1-indexed pair of indices
 */
function twoSum(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];

    if (sum === target) return [l + 1, r + 1];
    if (sum < target) l++;
    else r--;
  }
}

module.exports = { twoSum };
