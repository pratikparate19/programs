// 10. Reverse a String
function reverseString(str) {
  let reversed = "";

  // Step 1: Find the length manually
  let length = 0;
  while (str[length] !== undefined) {
    length++;
  }

  // Step 2: Loop from end to start
  for (let i = length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
console.log(reverseString("hello"));      // "olleh"
console.log(reverseString("abc 123"));    // "321 cba"
console.log(reverseString("OpenAI"));     // "IAnepO"
console.log(reverseString(""));           // "" 