/**
 * Valid Sudoku
 * https://leetcode.com/problems/valid-sudoku/
 * Difficulty: Medium
 *
 * HashSet per row, column, and 3×3 box — O(81) ≈ O(1) time and space
 * Encode each digit's placement and check for collisions.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const seen = new Set();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === ".") continue;

      const rowKey = `r${r}:${val}`;
      const colKey = `c${c}:${val}`;
      const boxKey = `b${Math.floor(r / 3)},${Math.floor(c / 3)}:${val}`;

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
