class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let currentRow = 0;

        while (currentRow < matrix.length) {
            const lastColumn = matrix[currentRow].length - 1;

            if (target > matrix[currentRow][lastColumn]) {
                currentRow++;
            } else {
                break;
            }
        }

        if (currentRow >= matrix.length) {
            return false;
        }

        let leftPointer = 0;
        let rightPointer = matrix[currentRow].length - 1;

        while (leftPointer <= rightPointer) {
            let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

            if (target > matrix[currentRow][middlePointer]) {
                leftPointer = middlePointer + 1;
            } else if (target < matrix[currentRow][middlePointer]) {
                rightPointer = middlePointer - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
