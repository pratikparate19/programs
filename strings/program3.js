// 3. Count word in string
function countWords(str) {
  let inWord = false;
  let count = 0;

  for (let i = 0; str[i] !== undefined; i++) {
    const char = str[i];

    if (char !== ' ' && !inWord) {
      count++;
      inWord = true;
    } else if (char === ' ') {
      inWord = false;
    }
  }

  return count;
}

// Test cases
console.log(countWords("Hello world"));            // 2
console.log(countWords("  This is   a test "));    // 4
console.log(countWords("OneWord"));                // 1
console.log(countWords("    "));                   // 0
console.log(countWords("Count    multiple   words")); // 3
