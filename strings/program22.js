// 22. Check if a string is a pangram (contains all 26 letters)
function isPangram(str) {
  let seen = new Array(26).fill(false);
  let count = 0;

  for (let i = 0; str[i] !== undefined; i++) {
    let ch = str[i].toLowerCase();
    let code = ch.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      let idx = code - 97;
      if (!seen[idx]) {
        seen[idx] = true;
        count++;
      }
    }
  }

  return count === 26;
}

console.log(isPangram("The quick brown fox jumps over a lazy dog")); // true
console.log(isPangram("Hello World")); // false
console.log(isPangram("Pack my box with five dozen liquor jugs")); // true
console.log(isPangram("abcdefghijklmnopqrstuvwxyz")); // true
console.log(isPangram("A quick movement of the enemy will jeopardize five gunboats")); // true
console.log(isPangram("This is not a pangram")); // false   
