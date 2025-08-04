// 5. Count number of vowels, consonants, spaces in String
function countVowelsConsonantsSpaces(str) {
  let vowels = 0;
  let consonants = 0;
  let spaces = 0;

  for (let i = 0; str[i] !== undefined; i++) {
    let ch = str[i];

    // Check space
    if (ch === ' ') {
      spaces++;
    }
    // Check vowels (lowercase and uppercase)
    else if (
      ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
      ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
    ) {
      vowels++;
    }
    // Check if it’s a letter (consonant)
    else if (
      (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')
    ) {
      consonants++;
    }
  }

  return {
    vowels: vowels,
    consonants: consonants,
    spaces: spaces
  };
}

// Test cases
console.log(countVowelsConsonantsSpaces("Hello World"));       
// { vowels: 3, consonants: 7, spaces: 1 }

console.log(countVowelsConsonantsSpaces("This is a test"));    
// { vowels: 4, consonants: 7, spaces: 3 }

console.log(countVowelsConsonantsSpaces("OpenAI GPT-4"));      
// { vowels: 4, consonants: 5, spaces: 1 }
console.log(countVowelsConsonantsSpaces("  spaced  words  "));