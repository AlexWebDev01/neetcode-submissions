class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        strs.forEach((str) => {
            encoded += `${str.length}#${str}`;
        });

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    const decoded = [];

    let i = 0;

    while (i < str.length) {
        let delimeterIndex = i;

        while (str[delimeterIndex] !== "#") {
            delimeterIndex++;
        }

            const length = parseInt(str.substring(i, delimeterIndex));

            const start = delimeterIndex + 1;
            const end = start + length;

            decoded.push(str.substring(start, end));
            i = end;
    }
        
    return decoded;
    }
}
