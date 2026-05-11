class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
  if (strs.length < 2) {
    return [strs];
  }

  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const sorted = [...strs[i]].sort().join("");

    if (!map[sorted]) {
      map[sorted] = [];
    }

    map[sorted].push(strs[i]);
  }

  const output = [];

  const keys = Object.keys(map);

  keys.forEach((key) => {
    output.push(map[key]);
  });

  return output;
    }
}
