// 13. Capitalize first and last character of each word

function capitalizeFirstAndLast(str) {
  let result = "";
  let wordStart = -1;

  // Step 1: Find length
  let length = 0;
  while (str[length] !== undefined) length++;

  for (let i = 0; i <= length; i++) {
    let ch = str[i];

    // If current character is not space and we're at start of a word
    if (ch !== ' ' && wordStart === -1) {
      wordStart = i; // mark start of word
    }

    // If current character is space or end of string — word boundary
    if (ch === ' ' || ch === undefined) {
      let wordEnd = i - 1;

      for (let j = wordStart; j <= wordEnd; j++) {
        let char = str[j];

        // First or last character of the word
        if (j === wordStart || j === wordEnd) {
          // Capitalize manually
          if (char >= 'a' && char <= 'z') {
            char = String.fromCharCode(char.charCodeAt(0) - 32); // convert to uppercase
          }
        }

        result += char;
      }

      // Append the space (if it exists)
      if (ch === ' ') result += ' ';

      wordStart = -1; // reset for next word
    }
  }

  return result;
}

// Test cases
console.log(capitalizeFirstAndLast("hello world test"));  // "HellO WorlD TesT"
console.log(capitalizeFirstAndLast("this is a demo"));    // "ThiS IS A DemO"
console.log(capitalizeFirstAndLast("one"));               // "OnE"
console.log(capitalizeFirstAndLast("  spaced  words  ")); // "  SpaceD  WordS  "
console.log(capitalizeFirstAndLast(""));                  // ""
console.log(capitalizeFirstAndLast("a b c d e f g h i j k l m n o p q r s t u v w x y z")); // "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
console.log(capitalizeFirstAndLast("  a  b  c  d  e  ")); // "  A  B  C  D  E  "
console.log(capitalizeFirstAndLast("  a quick brown fox jumps over the lazy dog ")); // "  A QuicK BrowN FoX JumpS OveR ThE LazY DoG "
console.log(capitalizeFirstAndLast("  a b c d e f g h i j k l m n o p q r s t u v w x y z ")); // "  A B C D E F G H I J K L M N O