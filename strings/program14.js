// 14. Calculate frequency of characters in a string
function characterFrequency(str) {
  let frequency = {};

  for (let i = 0; str[i] !== undefined; i++) {
    let ch = str[i];

    // If character already exists in the map, increment
    if (frequency[ch] !== undefined) {
      frequency[ch]++;
    } else {
      frequency[ch] = 1;
    }
  }

  return frequency;
}

// Test cases
console.log(characterFrequency("hello"));
// { h: 1, e: 1, l: 2, o: 1 }

console.log(characterFrequency("aabbbc"));
// { a: 2, b: 3, c: 1 }

console.log(characterFrequency("")); 
// {}
console.log(characterFrequency("123321"));
// { '1': 2, '2': 2, '3': 2 }
console.log(characterFrequency("!@#$%^&*()"));
// { '!': 1, '@': 1, '#': 1, '$': 1, '%': 1, '^': 1, '&': 1, '*':           