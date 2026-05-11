class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) {
            return 0;
        }

        const sortedNums = nums.sort((a, b) => a - b);

        let answer = 1;
        let currentSequence = 1;
        let previousElement = sortedNums[0];

        for (let i = 1; i < sortedNums.length; i++) {
            if (sortedNums[i] === previousElement + 1) {
            currentSequence++;
            } else if (sortedNums[i] === previousElement) {
            } else {
            currentSequence = 1;
            }

            previousElement = sortedNums[i];

            if (currentSequence > answer) {
                answer = currentSequence;
            }
        }

        return answer;
    }
}
