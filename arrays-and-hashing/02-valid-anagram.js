/**
 * Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * Difficulty: Easy
 *
 * What's an anagram?
 * Two strings are anagrams if they use the exact same letters
 * with the exact same counts, just possibly in a different order.
 *
 * What this problem asks:
 * Given strings s and t, return true if t is an anagram of s,
 * otherwise return false.
 *
 * Philly-style game plan:
 * We keep a little count board for letters a-z.
 * - Walk through both words at the same time
 * - Add for letters in s
 * - Subtract for letters in t
 * If they really got the same letters, every count ends at 0.
 *
 * Time: O(n) | Space: O(1) (fixed 26-letter alphabet)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  // If the lengths ain't matching, no shot these are anagrams.
  if (s.length !== t.length) return false;

  // 26 spots, one for each lowercase letter.
  const freq = new Array(26).fill(0);
  // ASCII code for "a" so we can map letters to indexes 0-25.
  const base = "a".charCodeAt(0);

  // One loop, two moves:
  // - bump count for s
  // - drop count for t
  // End result should balance out to all zeros.
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - base]++;
    freq[t.charCodeAt(i) - base]--;
  }

  // If every bucket is 0, we're solid.
  return freq.every((count) => count === 0);
}

module.exports = { isAnagram };
