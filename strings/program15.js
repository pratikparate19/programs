// 15. Find Non-repeating characters of a String
function findNonRepeatingCharacters(str) {
  let frequency = {};

  // Step 1: Count character frequencies
  for (let i = 0; str[i] !== undefined; i++) {
    let ch = str[i];
    if (frequency[ch] !== undefined) {
      frequency[ch]++;
    } else {
      frequency[ch] = 1;
    }
  }

  // Step 2: Collect characters that occur only once
  let result = "";

  for (let i = 0; str[i] !== undefined; i++) {
    if (frequency[str[i]] === 1) {
      result += str[i] + " ";
    }
  }

  return result.trim(); // remove last space
}

// Test cases
console.log(findNonRepeatingCharacters("programming"));  // "p o a i n"
console.log(findNonRepeatingCharacters("aabbcc"));        // ""
console.log(findNonRepeatingCharacters("abcde"));         // "a b c d e"
console.log(findNonRepeatingCharacters("hello world"));   // "h e w r d"
console.log(findNonRepeatingCharacters(""));              // ""
console.log(findNonRepeatingCharacters("123321"));        // ""
console.log(findNonRepeatingCharacters("!@#$%^&*()"));    // "! @ # $ % ^ & * ( )");
console.log(findNonRepeatingCharacters("a quick brown fox jumps over the lazy dog")); // "q u i c k b r w x j