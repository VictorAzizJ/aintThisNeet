/**
 * 3Sum
 * https://leetcode.com/problems/3sum/
 * Difficulty: Medium
 *
 * Method: Sort + Two Pointers
 * - Sort first so we can sweep pairs with left/right pointers.
 * - Fix one number, then hunt for two others that sum to its opposite.
 * - Skip duplicate values so each triplet appears once.
 *
 * Time: O(n^2)
 * Space: O(1) extra (excluding output)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;

        while (l < r && nums[l] === nums[l - 1]) l++;
        while (l < r && nums[r] === nums[r + 1]) r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return res;
}

module.exports = { threeSum };
