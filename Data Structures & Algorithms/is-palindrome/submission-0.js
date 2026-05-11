class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regexp = new RegExp(/[^a-zA-Z0-9]/g);
        const cleanString = s.replaceAll(regexp, "").toLocaleLowerCase();

        let start = 0,
        end = cleanString.length - 1;

        while (start < end) {
            if (cleanString[start] === cleanString[end]) {
                start++;
                end--;
            } else {
                return false;
            }
        }

        return true;
    }
}
