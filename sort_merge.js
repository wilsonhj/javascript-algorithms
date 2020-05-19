const merge = (arr1, arr2) => {
  const results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){ 
    if(arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else { // arr2[j] >= arr1[i]
      results.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    results.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){ // push leftovers from arrays of different sizes
    results.push(arr2[j]);
    j++;
  }
  return results;
}

const mergeSort = arr => { // O(NlogN)
  if (arr.length <= 1) return arr;
  let mid = Math.floor( arr.length / 2);
  let left = merge(arr.slice(0, mid));
  let right = merge(arr.slice(mid));
  return merge(left, right);  
}

// const m = merge([1,10,50], [2,14,99,100,101,105]);
const ms = mergeSort([1,3,6,4,2,8,9,0,100,45,34,13,2,7]);
console.log(ms);