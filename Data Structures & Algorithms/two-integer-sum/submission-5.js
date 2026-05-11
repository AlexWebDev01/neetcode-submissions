class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const currentVal = nums[i];
            const complement = target - currentVal;

            if (map.has(complement)) {
                return [map.get(complement), i];
            }

            map.set(currentVal, i);
        }

        return [];
    }
}
