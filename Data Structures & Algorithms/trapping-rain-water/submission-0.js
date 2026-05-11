class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || !height.length) {
            return 0;
        }

        let start = 0;
        let end = height.length - 1;
        let leftMax = height[start];
        let rightMax = height[end];
        let totalWater = 0;

        while (start < end) {
            if (leftMax < rightMax) {
                start++;
                leftMax = Math.max(leftMax, height[start]);
                totalWater += leftMax - height[start];
            } else {
                end--;
                rightMax = Math.max(rightMax, height[end]);
                totalWater += rightMax - height[end];
            }
        }

        return totalWater;
    }
}
