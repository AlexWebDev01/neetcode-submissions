class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];

        nums.forEach((num, index) => {
            const leftPart = index === 0 ? [] : nums.slice(0, index);
            const rightPart = nums.slice(index + 1, nums.length);

            let partialResult = 1;

            for (let i = 0; i < leftPart.length; i++) {
            partialResult = partialResult * leftPart[i];
            }

            for (let i = 0; i < rightPart.length; i++) {
            partialResult = partialResult * rightPart[i];
            }

            result.push(partialResult);
        });

        return result;
    }
}
