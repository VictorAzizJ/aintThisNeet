/**
 * Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 * Difficulty: Medium
 *
 * Method: Prefix pass + suffix pass (no division)
 * - Prefix value at i = product of everything left of i.
 * - Suffix value at i = product of everything right of i.
 * - Final answer at i = prefix * suffix.
 *
 * Anime analogy:
 * Each position gets power from allies on the left, then power from allies on
 * the right. Combined aura gives total power "except self."
 *
 * Time: O(n)
 * Extra space: O(1) (output array is not counted)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n);

  // First pass: store left-side product at each index.
  answer[0] = 1;
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  // Second pass: walk from right and multiply right-side product in place.
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}

module.exports = { productExceptSelf };
