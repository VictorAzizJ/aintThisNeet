/**
 * Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * Difficulty: Medium
 *
 * Method: Sorted-signature HashMap
 * - If two words are anagrams, sorting their letters gives the same "signature".
 * - Use that signature as a team badge key in a map.
 * - Everyone with the same badge joins the same squad.
 *
 * Time: O(n * k log k)
 * Space: O(n * k)
 * n = number of words, k = max word length
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  // signature -> list of original words
  const map = new Map();

  for (const str of strs) {
    // Example: "tea" -> "aet". Same badge as "eat" and "ate".
    const key = str.split("").sort().join("");

    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }

  // Return all squads.
  return Array.from(map.values());
}

module.exports = { groupAnagrams };
