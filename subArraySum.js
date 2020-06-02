// Runtime: 64 ms, faster than 95% of JavaScript online submissions for Subarray Sum Equals K.
// Memory Usage: 42.8 MB, less than 50.00% of JavaScript online submissions for Subarray Sum Equals K.

const subArraySum = (nums, k) => {  
  let count = 0, sum = 0;
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++){
    sum += nums[i];
    if (map.has(sum - k)){
      count += map.get(sum - k);
    }
    if(!map.has(sum)) map.set(sum, 1);
    else map.set(sum, map.get(sum) + 1);
  }
  return count;
}

const s = subArraySum([1,1,1], 2);
console.log(s);