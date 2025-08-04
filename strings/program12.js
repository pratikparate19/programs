// 12. Sum of the numbers in a String


function sumOfNumbersInString(str) {
  let sum = 0;
  let currentNumber = 0;
  let inNumber = false;

  for (let i = 0; str[i] !== undefined; i++) {
    let ch = str[i];

    if (ch >= '0' && ch <= '9') {
      currentNumber = currentNumber * 10 + (ch - '0');
      inNumber = true;
    } else {
      if (inNumber) {
        sum += currentNumber;
        currentNumber = 0;
        inNumber = false;
      }
    }
  }

  // Add the last number if string ends with a digit
  if (inNumber) {
    sum += currentNumber;
  }

  return sum;
}

// Test cases
console.log(sumOfNumbersInString("abc12xy3z4"));       // 19
console.log(sumOfNumbersInString("1a2b3c"));           // 6
console.log(sumOfNumbersInString("no digits"));        // 0
console.log(sumOfNumbersInString("100plus200equals")); // 300
console.log(sumOfNumbersInString("12345"));            // 12345
console.log(sumOfNumbersInString(""));                 // 0
console.log(sumOfNumbersInString("a1b2c3d4e5f   ")); // 15
console.log(sumOfNumbersInString("5 apples and 10 oranges")); // 15
console.log(sumOfNumbersInString("0 is a number"));    // 0
console.log(sumOfNumbersInString("1000 and 2000"));   // 300    