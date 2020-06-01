const isPalindromeRange = (str, i, j) => {
  for(let k = i; k <= i + (j - i) / 2; k++){
    if (str.charAt(k) !== str.charAt(j - k + i)) return false;
  }
  return true;
}

const validPalindrome = s => {
  let j;
  for(let i = 0; i < s.length / 2; i++){
    j = (s.length - 1) - i; // j points to end of string and decrements as i increments until midpoint of string
    if( s.charAt(i) !== s.charAt(j) ){      
      return ( isPalindromeRange(s, i+1, j) || isPalindromeRange(s, i, j-1) );
    }
  }
  return true;
}

const v = validPalindrome("edabcade");
console.log(v);

// const v2 = validPalindrome("dudeness");
// console.log(v2);