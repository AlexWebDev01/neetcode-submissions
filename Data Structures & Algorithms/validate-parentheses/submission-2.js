class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (!s || s.length < 2) {
            return false;
        }

        const bracketsMapping = {
            "}": "{",
            "]": "[",
            ")": "(",
        };
        const openBrackets = Object.values(bracketsMapping);
        const bracketsStack = [];

        for (let i = 0; i < s.length; i++) {
            if (openBrackets.includes(s[i])) {
                bracketsStack.push(s[i]);
            } else {
                const lastItemInStack = bracketsStack[bracketsStack.length - 1];
                const correspondingBracket = bracketsMapping[s[i]];

                if (lastItemInStack !== correspondingBracket) {
                    return false;
                }

                bracketsStack.pop();
            }
        }

        return bracketsStack.length === 0;
    }
}
