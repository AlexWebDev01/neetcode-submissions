class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length - 1;
        let res = 0;

        while (start < end) {
            const area = Math.min(heights[start], heights[end]) * (end - start);

            res = Math.max(res, area);

            if (heights[start] <= heights[end]) {
                start++;
            } else {
                end--;
            }
        }

        return res;
    }
}
