class MinStack {
    stack = [];
    minStack = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        
        const minValue = this.minStack[this.minStack.length - 1]

        if (this.minStack.length === 0 || minValue >= val) {
            this.minStack.push(val);
        }

    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop();

        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];    
    }
}
