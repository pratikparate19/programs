// 17. Count common sub-sequence in two strings\
function longestCommonSubsequence(str1, str2) {
  let n = str1.length;
  let m = str2.length;

  // Create 2D array for dp
  let dp = [];

  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= m; j++) {
      dp[i][j] = 0;
    }
  }

  // Fill the dp table
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n][m]; // length of LCS
}

// Test cases
console.log(longestCommonSubsequence("abc", "ac"));     // 2
console.log(longestCommonSubsequence("abcde", "ace"));  // 3
console.log(longestCommonSubsequence("abc", "def"));    // 0
console.log(longestCommonSubsequence("abcdef", "abdf")); // 4
console.log(longestCommonSubsequence("AGGTAB", "GXTXAYB")); // 4
console.log(longestCommonSubsequence("abc", "abc"));     // 3   