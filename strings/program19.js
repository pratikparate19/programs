// 19. Return maximum occurring character in the input string
function maxOccurringChar(str) {
  let freq = {};
  let maxChar = '';
  let maxCount = 0;

  for (let i = 0; str[i] !== undefined; i++) {
    let ch = str[i];
    
    // Count frequency
    if (freq[ch] !== undefined) {
      freq[ch]++;
    } else {
      freq[ch] = 1;
    }

    // Track maximum
    if (freq[ch] > maxCount) {
      maxCount = freq[ch];
      maxChar = ch;
    }
  }

  return maxChar;
}

// Test cases
console.log(maxOccurringChar("javascript"));   // "a"
console.log(maxOccurringChar("hello"));        // "l"
console.log(maxOccurringChar("aaaaabbbbcc"));  // "a"
