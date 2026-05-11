class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const length = nums.length;
        const result = new Array(length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        let postifx = 1;

        for (let i = length - 1; i >= 0; i--) {
            result[i] *= postifx;
            postifx *= nums[i];
        }

        return result;
    }
}
