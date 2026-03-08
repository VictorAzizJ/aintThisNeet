/**
 * Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 * Difficulty: Medium
 *
 * Prefix & suffix products — O(n) time, O(1) extra space (output array doesn't count)
 * Build the answer in two passes: left-to-right for prefix products,
 * then right-to-left to multiply in the suffix products.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n);

  answer[0] = 1;
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}

module.exports = { productExceptSelf };
