/**
 * Valid Sudoku
 * https://leetcode.com/problems/valid-sudoku/
 * Difficulty: Medium
 *
 * Method: One HashSet tracking row/col/box claims
 * - Every digit "claims" a row slot, column slot, and 3x3 box slot.
 * - If a claim already exists, rules are broken.
 *
 * Anime analogy:
 * A digit is like a guild badge. The same badge cannot appear twice in the
 * same lane (row), tower (column), or district (3x3 box).
 *
 * Time: O(81) -> constant
 * Space: O(81) -> constant
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  // Stores unique claim keys like "r0:5", "c3:7", "b1,2:9".
  const seen = new Set();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === ".") continue;

      const rowKey = `r${r}:${val}`;
      const colKey = `c${c}:${val}`;
      const boxKey = `b${Math.floor(r / 3)},${Math.floor(c / 3)}:${val}`;

      // Any repeated claim means invalid board.
      if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
        return false;
      }

      seen.add(rowKey);
      seen.add(colKey);
      seen.add(boxKey);
    }
  }

  return true;
}

module.exports = { isValidSudoku };
