// 9. Remove characters from a string except alphabets
function removeNonAlphabets(str) {
  let result = "";

  for (let i = 0; str[i] !== undefined; i++) {
    let ch = str[i];

    // Keep only A-Z or a-z
    if (
      (ch >= 'A' && ch <= 'Z') ||
      (ch >= 'a' && ch <= 'z')
    ) {
      result += ch;
    }
  }

  return result;
}

// Test cases
console.log(removeNonAlphabets("Hello! 123 World@#"));  // "HelloWorld"
console.log(removeNonAlphabets("JavaScript_2025"));     // "JavaScript"
console.log(removeNonAlphabets("$$$OnlyLetters***"));   // "OnlyLetters"
console.log(removeNonAlphabets("1234567890"));          // ""
console.log(removeNonAlphabets("  Spaces and symbols!  ")); // "Spacesandsymbols"
console.log(removeNonAlphabets(""));                     // ""  