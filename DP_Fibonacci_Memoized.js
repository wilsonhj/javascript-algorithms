// function fib(n, memo=[]){
//   if (memo[n] !== undefined) return memo[n];
//   if (n <= 2) return 1;
//   let result = fib(n-1, memo) + fib(n-2, memo);
//   memo[n] = result;
//   return result;
// }


function fib(n, memo=[undefined, 1, 1]){
  if (memo[n] !== undefined) return memo[n];
  let result = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = result;
  return result;
}

console.log(fib(5)); 


// function fib(n, f=[n+2]) {
//   f[0] = 0;
//   f[1] = 1;

//   for(let i = 2; i <= n; ++i) {
//       f[i] = f[i-1] + f[i-2];
//   }

//   return f[n];
// }






