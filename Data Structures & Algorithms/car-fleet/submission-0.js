class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
  const stack = [];

  position.forEach((item, index) => {
    stack.push([item, speed[index]]);
  });

  stack.sort((a, b) => b[0] - a[0]);

  const timeStack = [];

  stack.forEach((car) => {
    const position = car[0];
    const speed = car[1];
    const timeToFinish = (target - position) / speed;

    if (!timeStack.length) {
      timeStack.push(timeToFinish);
    }

    if (timeStack.length && timeStack[timeStack.length - 1] < timeToFinish) {
      timeStack.push(timeToFinish);
    }
  });

  const answer = timeStack.length;

  return answer;

    }
}
