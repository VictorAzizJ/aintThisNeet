/**
 * Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * Difficulty: Easy
 *
 * Two pointers — O(n) time, O(1) space
 * Compare alphanumeric characters from both ends, ignoring case.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !isAlphaNum(s[l])) l++;
    while (l < r && !isAlphaNum(s[r])) r--;

    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

    l++;
    r--;
  }

  return true;
}

function isAlphaNum(c) {
  const code = c.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

module.exports = { isPalindrome };
