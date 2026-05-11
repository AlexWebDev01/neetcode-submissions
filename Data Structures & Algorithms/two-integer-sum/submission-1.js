class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 1; j < nums.length; j++) {
                if (i === j) continue;

                const sum = nums[i] + nums[j];

                if (sum === target) {
                    return [i, j];
                }
            }
        }
    }
}
