class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0;
        let end = numbers.length - 1;

        while (start < end) {
            const currentResult = numbers[start] + numbers[end];

            if (currentResult === target) {
            return [start + 1, end + 1];
            }

            if (currentResult < target) {
            start++;
            }

            if (currentResult > target) {
            end--;
            }
        }

        return [];
    }
}
