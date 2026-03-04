/**
 * Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * Difficulty: Easy
 *
 * Character frequency count — O(n) time, O(1) space
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const freq = new Array(26).fill(0);
  const base = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - base]++;
    freq[t.charCodeAt(i) - base]--;
  }

  return freq.every((count) => count === 0);
}

module.exports = { isAnagram };
