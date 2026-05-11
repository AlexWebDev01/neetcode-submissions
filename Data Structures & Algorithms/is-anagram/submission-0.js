class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (!s.length || !t.length) {
    return false;
  }

  const constructMapFromString = (string) => {
    const map = new Map();

    for (let i = 0; i < string.length; i++) {
      const currentValue = map.get(string[i]) || 0;

      map.set(string[i], currentValue + 1);
    }

    return map;
  };

  const sMap = constructMapFromString(s);
  const tMap = constructMapFromString(t);

  if (sMap.size !== tMap.size) {
    return false;
  }

  for (const [key, value] of sMap) {
    const comparedValue = tMap.get(key);

    if (comparedValue !== value) {
      return false;
    }
  }

  return true;
    }
}
