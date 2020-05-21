const getDigit = (num, i) => { // only accepts base 10. how to modularize this code to accept any base? Hexadecimal? Binary?
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}

const digitCount = (num) => { // counts integer only; how to count mantissa after decimal point? 
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) ) + 1;
}

const mostDigits = (nums) => {
  let maxDigits = 0;
  nums.forEach(num => {
    maxDigits = Math.max(maxDigits, digitCount(num))
  });
  return maxDigits;
}

const radixSort = (nums) => { // only sorts positive integers; how to sort negative numbers? floats?
  const max = mostDigits(nums);
  for(let k = 0; k <= max; k++){ // O(k)
    const digitBucket = Array.from({length: 10}, () => []); 
    for(let i = 0; i < nums.length; i++){ // O(n)
      let digit = getDigit(nums[i], k);
      digitBucket[digit].push(nums[i]);
    }
    nums = [].concat(...digitBucket); // [[1], [2], [3]] -> [1, 2, 3]
    // console.log(nums, "nums");
  }
  return nums; // Time: O(n * k) | Space: O(n + k)
}

const r1 = radixSort([1, 2, .01, 100, 198, 198, 20000, 12345, 123456, 0]);
console.log(r1);

// console.log(digitCount(-234));

// console.log(mostDigits([1, -2, .01, 100, 198, -198, -20000, 12345, 123456, 0, -0]));  // 6

// console.log(getDigit(12345, 0)); // 5
// console.log(getDigit(12345, 1)); // 4
// console.log(getDigit(12345, 2)); // 3