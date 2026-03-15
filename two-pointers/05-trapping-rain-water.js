/**
 * Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 * Difficulty: Hard
 *
 * Method: Two pointers + running max walls
 * - Keep one pointer on each side and track the tallest wall seen from each side.
 * - The smaller max wall decides the water level at that step.
 * - Move that side inward and collect trapped water like filling tiny buckets.
 *
 * Time: O(n)
 * Space: O(1)
 */

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let l = 0;
  let r = height.length - 1;
  let maxL = 0;
  let maxR = 0;
  let water = 0;

  while (l < r) {
    if (maxL <= maxR) {
      maxL = Math.max(maxL, height[l]);
      water += maxL - height[l];
      l++;
    } else {
      maxR = Math.max(maxR, height[r]);
      water += maxR - height[r];
      r--;
    }
  }

  return water;
}

module.exports = { trap };
