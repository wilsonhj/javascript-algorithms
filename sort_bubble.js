const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const bubbleSort = (arr) => {
  let isSorted = true;
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
        isSorted = false;
      }
    }
    if(isSorted) break;
  }
  return arr;
}

const b = bubbleSort([1,3,2,5,14,1,8,9,0]); // O(N^2)
console.log(b);

const c = bubbleSort([2,2,2,1,2,2,2,3]); // O(N)
console.log(c);