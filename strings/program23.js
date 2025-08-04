// Count how many times a substring appears in a string
function countSubstring(str, substr) {
  let count = 0;
  for (let i = 0; i <= str.length - substr.length; i++) {
    let match = true;
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }
    if (match) count++;
  }
  return count;
}

console.log(countSubstring("ababab", "ab")); // 3
console.log(countSubstring("aaaa", "aa"));   // 3 (overlapping)
console.log(countSubstring("hello world", "lo")); // 1
console.log(countSubstring("test", "xyz")); // 0        