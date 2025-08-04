// 20. Remove all duplicates from the input string.
function removeDuplicates(str) {
  let seen = {};
  let result = "";

  for (let i = 0; str[i] !== undefined; i++) {
    let ch = str[i];
    if (!seen[ch]) {
      result += ch;
      seen[ch] = true;
    }
  }

  return result;
}

// Test cases
console.log(removeDuplicates("programming")); // "progamin"
console.log(removeDuplicates("aabbcc"));      // "abc"
console.log(removeDuplicates("abcabc"));      // "abc"
