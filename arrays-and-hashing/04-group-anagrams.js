/**
 * Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * Difficulty: Medium
 *
 * Sorted-key HashMap grouping — O(n * k log k) time, O(n * k) space
 * where n = number of strings, k = max string length
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  return Array.from(map.values());
}

module.exports = { groupAnagrams };
