class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) {
            return 0;
        }

        const set = new Set(nums);
        let longest = 1;

        for (const num of nums) {
            if (!set.has(num - 1)) {
                let length = 1;

                while (set.has(num + length)) {
                    length++;
                }

                longest = length > longest ? length : longest;
            }
        }

        return longest;
    }
}
