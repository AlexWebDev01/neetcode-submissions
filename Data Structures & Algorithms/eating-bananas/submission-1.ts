class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const sortedPiles = piles.sort((a, b) => a - b);

        let min = 1;
        let max = sortedPiles.at(-1);
        let result = max;
        
        while (min <= max) {
            let mid = Math.floor((max + min) / 2);
            let totalHours = 0;

            sortedPiles.forEach((pile) => {
                totalHours += Math.ceil(pile / mid);
            })

            if (totalHours > h) {
                min = mid + 1;
            } else {
                result = mid;
                max = mid - 1;
            }
        }
        
        return result;
    }
}