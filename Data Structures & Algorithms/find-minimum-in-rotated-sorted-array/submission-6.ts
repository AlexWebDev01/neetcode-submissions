class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if (nums[0] < nums.at(-1)) {
            return nums[0];
        } else {
            // [4,5,0,1,2,3]
            // [3, 4, 5, 6, 7, 8, 1, 2]
            // Target = mid < mid - 1

            let left = 0;
            let right = nums.length - 1;
            let smallest = nums.at(-1);

            // nums=[4,5,6,7,0,1,2]
            while (left <= right) {
                let mid = Math.floor((left + right) / 2);
                let isMidSmallest = nums[mid] < smallest;

                if (nums[mid] >= nums[left] && !isMidSmallest) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }

                smallest = Math.min(smallest, nums[mid]);

                console.log(`Mid: ${nums[mid]}`);
                console.log(`Smallest: ${smallest}`);
            }

            return smallest;
        }
    }
}
