// 2. Count the occurrence of a character in string
function countChar(str, targetChar) {
  let count = 0;

  // Loop through the string
  for (let i = 0; str[i] !== undefined; i++) {
    if (str[i] === targetChar) {
      count++;
    }
  }

  return count;
}

// Test cases
console.log(countChar("hello world", 'l')); // 3
console.log(countChar("javascript", 'a'));  // 2
console.log(countChar("mississippi", 's')); // 4
console.log(countChar("openai", 'z'));   