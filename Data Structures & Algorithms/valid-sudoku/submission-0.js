class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const size = board.length;
        const rows = Array.from({ length: 9 }, () => new Set());
        const columns = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let row = 0; row < size; row++) {
            for (let column = 0; column < size; column++) {
            const element = board[row][column];

            if (element === ".") continue;

            const boxIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3);

            const isInvalid =
                rows[row].has(element) ||
                columns[column].has(element) ||
                boxes[boxIndex].has(element);

            if (isInvalid) {
                return false;
            }

            rows[row].add(element);
            columns[column].add(element);
            boxes[boxIndex].add(element);
            }
        }
        return true;
    }
}
