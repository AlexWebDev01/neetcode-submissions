class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.slice().sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < sortedNums.length - 2; i++) {
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

            const target = -sortedNums[i];
            let start = i + 1;
            let end = sortedNums.length - 1;

            while (start < end) {
                const currentResult = sortedNums[start] + sortedNums[end];

                if (currentResult === target) {
                    result.push([sortedNums[i], sortedNums[start], sortedNums[end]]);
                    start++;
                    end--;

                    while (start < end && sortedNums[start] === sortedNums[start - 1])
                    start++;
                    while (start < end && sortedNums[end] === sortedNums[end + 1]) end--;
                }

                if (currentResult < target) {
                    start++;
                }

                if (currentResult > target) {
                    end--;
                }
            }
        }

        return result;
    }
}
