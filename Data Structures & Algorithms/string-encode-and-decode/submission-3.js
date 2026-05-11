class Solution {
    symbol = '£';
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) {
            return "";
        }

        let encodedOutput = "";

        strs.forEach((string) => {
            encodedOutput += `${this.symbol}${string}`;
        });

        return encodedOutput;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (!str.length) {
            return [];
        }

        if (str === '') {
            return [''];
        }

        const result = str.split(this.symbol);
        result.shift();

        return result;
    }
}
