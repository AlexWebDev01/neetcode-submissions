class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if (nums[0] < nums.at(-1)) {
            return nums[0];
        } else {
            let left = 0;
            let right = nums.length - 1;
            let smallest = nums.at(-1);

            while (left <= right) {
                let mid = Math.floor((left + right) / 2);
                let isMidSmallest = nums[mid] < smallest;

                if (nums[mid] >= nums[left] && !isMidSmallest) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }

                smallest = Math.min(smallest, nums[mid]);
            }

            return smallest;
        }
    }
}
