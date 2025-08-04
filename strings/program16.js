// 16. Check if two strings are anagram of each other
function areAnagrams(str1, str2) {
  // Step 1: Manually check lengths
  let len1 = 0, len2 = 0;

  while (str1[len1] !== undefined) len1++;
  while (str2[len2] !== undefined) len2++;

  if (len1 !== len2) return false;

  // Step 2: Count frequency for both strings
  let freq1 = {};
  let freq2 = {};

  for (let i = 0; i < len1; i++) {
    let ch1 = str1[i];
    let ch2 = str2[i];

    freq1[ch1] = freq1[ch1] !== undefined ? freq1[ch1] + 1 : 1;
    freq2[ch2] = freq2[ch2] !== undefined ? freq2[ch2] + 1 : 1;
  }

  // Step 3: Compare frequency objects
  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
}

// Test cases
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
console.log(areAnagrams("race", "care"));     // true
console.log(areAnagrams("aabbcc", "abcabc")); // true
console.log(areAnagrams("abcd", "dcba"));     // true
console.log(areAnagrams("test", "sett"));     // true
console.log(areAnagrams("test", "tests"));    // false
console.log(areAnagrams("123", "321"));       // true
console.log(areAnagrams("123", "1234"));      // false
console.log(areAnagrams("", ""));              // true
console.log(areAnagrams("a", "a"));            // true
console.log(areAnagrams("a", "b"));            // false
console.log(areAnagrams("!@#", "#@!"));        // true
console.log(areAnagrams("!@#", "!#@"));        // true
console.log(areAnagrams("!@#", "abc"));        // false
console.log(areAnagrams("OpenAI", "IAnepO"));  // false
console.log(areAnagrams("OpenAI", "OpenAI"));  // true
console.log(areAnagrams("  ", "  "));          // true
console.log(areAnagrams("  ", "   "));         // false
console.log(areAnagrams("a b c", "c b a"));    // true
console.log(areAnagrams("a b c", "abc"));      // false