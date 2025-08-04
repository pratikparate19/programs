// 1. Check if a given string is palindrome or not

function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("racecar"));   // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("level"));     // true