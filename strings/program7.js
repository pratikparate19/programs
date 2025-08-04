// 7. Remove all vowels from the string
function removeVowels(str) {
  let result = "";

  for (let i = 0; str[i] !== undefined; i++) {
    let ch = str[i];

    // Check if character is a vowel (lowercase or uppercase)
    if (
      ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u' &&
      ch !== 'A' && ch !== 'E' && ch !== 'I' && ch !== 'O' && ch !== 'U'
    ) {
      result += ch; // Append non-vowel character
    }
  }

  return result;
}

// Test cases
console.log(removeVowels("Hello World"));    // "Hll Wrld"
console.log(removeVowels("AEIOUaeiou"));      // ""
console.log(removeVowels("JavaScript"));      // "JvScrpt"
console.log(removeVowels("OpenAI GPT-4"));   // "pn GPT-4"
console.log(removeVowels("This is a test")); // "Ths s  tst"
console.log(removeVowels("  spaced  words  ")); // "  spcd  wrds  "
console.log(removeVowels("")); // ""
console.log(removeVowels("a quick brown fox jumps over the lazy dog")); // " qck brwn fx jmps vr th lzy dg"
console.log(removeVowels("")); //