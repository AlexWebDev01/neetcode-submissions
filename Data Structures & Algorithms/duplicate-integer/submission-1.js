class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.lenght < 2) {
            return false;
        }

        const numSet = new Set(nums);

        if (nums.length > numSet.size) {
            return true;
        }

        return false;
    }
}
