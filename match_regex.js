// const isMatch = (str, pattern) => {
//   return Boolean(str.match(new RegExp(`^{pattern}$`)));
// }

// const isMatch = (s, p) => new RegExp(`^${p}$`).test(s);


const isMatch = (text, pattern, dp = [[]]) => {
  dp = [text.length + 1][pattern.length + 1];
  dp[text.length][pattern.length] = true;
  let firstMatch; 
  for(let j = pattern.length - 1; j >= 0; j--){
    firstMatch =  (i < text.length && 
                  (pattern.charAt(j) === text.charAt(i) || pattern.charAt(j) === '.') );
    if (j + 1 < pattern.length && pattern.charAt(j+1) === '*'){
      dp[i][j] = dp[i][j+2] || firstMatch && dp[i+1][j];
    }else {
      dp[i][j] = firstMatch && dp[i+1][j+1];
    }
  }
  return dp[0][0];
}


let test = isMatch('aa', 'a');
console.log(test);