class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operators = ["+", "-", "/", "*"];
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            const isOperator = operators.includes(tokens[i]);

            if (isOperator) {
            console.log("Operator found, preparing computing result...");
            const firstVal = stack.pop();
            const secondVal = stack.pop();

            const calculateSwitch = (
                a,
                b,
                operator
            ) => {
                switch (operator) {
                case "+":
                    return a + b;
                case "-":
                    return a - b;
                case "*":
                    return a * b;
                case "/":
                    return Math.trunc(a / b);
                default:
                    throw new Error(`Invalid operator: ${tokens[i]}`);
                }
            };

            if (firstVal !== undefined && secondVal !== undefined) {
                const res = calculateSwitch(secondVal, firstVal, tokens[i]);
                stack.push(res);
            }
            }

            if (!isOperator) {
            stack.push(parseInt(tokens[i]));
            }
        }

        return stack[0];
    }
}
