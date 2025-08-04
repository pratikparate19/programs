// 8. Remove spaces from a string
function removeSpaces(str) {
  let result = "";

  for (let i = 0; str[i] !== undefined; i++) {
    if (str[i] !== ' ') {
      result += str[i]; // Append only non-space characters
    }
  }

  return result;
}

// Test cases
console.log(removeSpaces("Hello World"));           // "HelloWorld"
console.log(removeSpaces("  Java Script  "));       // "JavaScript"
console.log(removeSpaces("NoSpacesHere"));          // "NoSpacesHere"
console.log(removeSpaces("  Leading and trailing spaces  ")); // "Leadingandtrailingspaces"
console.log(removeSpaces(""));                       // ""
console.log(removeSpaces("   "));                   // ""
console.log(removeSpaces("  Multiple   spaces  ")); // "Multiple spaces"
console.log(removeSpaces("  spaced  words  "));    // "spacedwords" 