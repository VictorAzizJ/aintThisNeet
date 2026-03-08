/**
 * Encode and Decode Strings
 * https://leetcode.com/problems/encode-and-decode-strings/
 * Difficulty: Medium
 *
 * Length-prefix encoding — O(n) time, O(n) space
 * Each string is encoded as "length#string", so the decoder reads
 * the length, skips the '#', and extracts exactly that many characters.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
function encode(strs) {
  return strs.map((s) => `${s.length}#${s}`).join("");
}

/**
 * @param {string} s
 * @return {string[]}
 */
function decode(s) {
  const result = [];
  let i = 0;

  while (i < s.length) {
    const hashIdx = s.indexOf("#", i);
    const len = parseInt(s.substring(i, hashIdx), 10);
    const str = s.substring(hashIdx + 1, hashIdx + 1 + len);
    result.push(str);
    i = hashIdx + 1 + len;
  }

  return result;
}

module.exports = { encode, decode };
