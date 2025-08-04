// 21. Print all the duplicates in the input string.
function printDuplicates(str) {
  let freq = {};
  
  for (let i = 0; str[i] !== undefined; i++) {
    let ch = str[i];
    if (freq[ch] !== undefined) {
      freq[ch]++;
    } else {
      freq[ch] = 1;
    }
  }

  for (let key in freq) {
    if (freq[key] > 1) {
      console.log(key + " => " + freq[key] + " times");
    }
  }
}

// Test case
console.log(printDuplicates("programming"));
// Output:
// r => 2 times
// g => 2 times
// m => 2 times
