/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let leftNumber = 1;
        let rightNumber = n;

        while (leftNumber <= rightNumber) {
            let middleNumber = Math.floor((leftNumber + rightNumber) / 2);
            const attempt = guess(middleNumber);

            if (attempt === -1) {
                rightNumber = middleNumber - 1;
            } else if (attempt === 1) {
                leftNumber = middleNumber + 1;
            } else {
                return middleNumber;
            }
        }
    }
}
