// 4. Reverse each word in string
function reverseEachWord(str) {
  let result = "";
  let word = "";

  for (let i = 0; str[i] !== undefined; i++) {
    let char = str[i];

    if (char !== " ") {
      word += char;
    } else {
      // Reverse the current word manually
      for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
      }
      result += " ";
      word = ""; // Reset word
    }
  }
  // Reverse and append the last word
  for (let j = word.length - 1; j >= 0; j--) {
    result += word[j];
  }

  return result;
}

// Test cases
console.log(reverseEachWord("hello world")); // "olleh dlrow"
console.log(reverseEachWord("This is a test")); // "sihT si a tset"
console.log(reverseEachWord("  spaced  words  ")); // "  decaps  sdrow  "
console.log(reverseEachWord("singleword")); // "drowelgnis"
