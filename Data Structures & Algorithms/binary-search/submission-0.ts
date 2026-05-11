class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if (!nums.length) return -1;

        let midPointer: number;
        let leftPointer = 0
        let rightPointer = nums.length -1;

        while(leftPointer <= rightPointer) {
            midPointer = Math.floor((rightPointer + leftPointer) / 2)

            if (target < nums[midPointer]) {
                rightPointer = midPointer -1;
            } else if (target > nums[midPointer]) {
                leftPointer = midPointer + 1;
            } else {
                return midPointer;
            }
        }

        return -1;
    }
}
