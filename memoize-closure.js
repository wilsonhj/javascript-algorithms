// const times10 = (n) => n*10;

// const memoizedClosure = () => {
//   const cache = {};
//   return (n) => {
//     if(n in cache) {
//       console.log(`cached value for input ${n} -> ${cache[n]}`);
//       return cache[n];
//     } 
//     else {
//       let result = times10(n);
//       cache[n] = result;
//       console.log(`computed value for input ${n} -> ${result}`);
//       return result;
//     }
//   };
// };

// const memoClosureTimes10 = memoizedClosure();
// memoClosureTimes10(9);
// memoClosureTimes10(9);



const genericMemoize = (cb) => {
  const cache = {};
  return (n) => {
    if (n in cache) return cache[n];
    else{
      let result = cb(n);
      cache[n] = result;
      console.log(`computed result for input ${n} -> ${result}`);
      return result;
    }
  };
};

const memoizedTimes10 = genericMemoize((n) => n*10);
memoizedTimes10(12);
console.log(memoizedTimes10(12), "cached result");