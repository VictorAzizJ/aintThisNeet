/**
 * Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * Difficulty: Medium
 *
 * Greedy two pointers — O(n) time, O(1) space
 * Start with the widest container, then move the shorter wall inward.
 * The shorter wall is the bottleneck, so moving the taller one cannot help.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let l = 0;
  let r = height.length - 1;
  let best = 0;

  while (l < r) {
    const h = Math.min(height[l], height[r]);
    const w = r - l;
    best = Math.max(best, h * w);

    if (height[l] < height[r]) l++;
    else r--;
  }

  return best;
}

module.exports = { maxArea };
