class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = {};

  nums.forEach((num) => {
    if (numsMap[num] === undefined) {
      numsMap[num] = 0;
    }

    numsMap[num]++;
  });

  const result = [];

  for (let i = 0; i < k; i++) {
    const keys = Object.keys(numsMap);
    const firstKey = Number(keys[0]);
    let topFrequent = firstKey;
    let counter = numsMap[firstKey];

    keys.forEach((k) => {
      const key = Number(k);

      if (numsMap[key] > counter) {
        topFrequent = key;
        counter = numsMap[key];
      }
    });

    result.push(topFrequent);
    delete numsMap[topFrequent];
  }

  return result;
    }
}
