const findKth = (nums, k) => {
  return nums.sort((a, b) => a - b)[nums.length - k]; // avg: O(n log n);
}

const f = findKth([2,3,1,4,6,5], 2);
console.log(f);

const f2 = findKth([2,6,15,4,9,10,-5], 4);
console.log(f2);

