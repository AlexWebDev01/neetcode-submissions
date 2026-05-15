class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if (nums.length === 1) {
            return nums[0];
        }

        let a = 0;
        let b = 1;

        while(nums[a] < nums[b] && b < nums.length -1) {
            a++;
            b++;
        }

        if (nums[0] < nums[b]) {
            return nums[0]
        } else {
            return nums[b];
        }
    }
}
