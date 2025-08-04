// 18. Check if two strings match where one string contains wildcard characters
function isMatch(pattern, str) {
  const memo = {};

  function dp(pIndex, sIndex) {
    let key = pIndex + "," + sIndex;
    if (key in memo) return memo[key];

    // If both pattern and string are exhausted
    if (pIndex === pattern.length && sIndex === str.length) return true;

    // If pattern is exhausted but string is not
    if (pIndex === pattern.length) return false;

    // If string is exhausted
    if (sIndex === str.length) {
      // Only match if remaining pattern is all '*'
      for (let i = pIndex; i < pattern.length; i++) {
        if (pattern[i] !== '*') return false;
      }
      return true;
    }

    let match = false;

    if (pattern[pIndex] === str[sIndex] || pattern[pIndex] === '?') {
      match = dp(pIndex + 1, sIndex + 1);
    } else if (pattern[pIndex] === '*') {
      // '*' matches zero or more characters
      match = dp(pIndex + 1, sIndex) || dp(pIndex, sIndex + 1);
    }

    memo[key] = match;
    return match;
  }

  return dp(0, 0);
}

// Test cases
console.log(isMatch("a*b", "aaab"));     // true
console.log(isMatch("a?b", "acb"));      // true
console.log(isMatch("a?b", "ab"));       // false
console.log(isMatch("a*b", "ab"));       // true
console.log(isMatch("*", "anything"));   // true
console.log(isMatch("abc*", "abcde"));   // true
console.log(isMatch("a*c?e", "abcde"));  // true
console.log(isMatch("a*c?e", "abce"));   // false
console.log(isMatch("a*b*c", "abc"));    // true
console.log(isMatch("a*b*c", "ab"));     // false
console.log(isMatch("a*b*c", "aabbcc")); // true
console.log(isMatch("a*b*c", "aabbbcc")); // true