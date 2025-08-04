// 11. Remove brackets from an algebraic expression
function removeBrackets(str) {
  let result = "";

  for (let i = 0; str[i] !== undefined; i++) {
    if (str[i] !== '(' && str[i] !== ')') {
      result += str[i];
    }
  }

  return result;
}

// Test cases
console.log(removeBrackets("a+(b+c)"));        // "a+b+c"
console.log(removeBrackets("a-(b-c)"));        // "a-b-c"
console.log(removeBrackets("(x+y)-(z+w)"));    // "x+y-z+w"
console.log(removeBrackets("((a+b))"));        // "a+b"
console.log(removeBrackets("No brackets here")); // "No brackets here"
console.log(removeBrackets("()"));             // ""
console.log(removeBrackets("((()))"));         // ""    