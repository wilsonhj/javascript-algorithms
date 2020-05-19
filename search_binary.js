function binarySearch(arr, elem) { // sorted array
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor( (start + end) / 2 );
  while (arr[middle] !== elem && start <= end) {
    if (arr[start] === elem) return start;
    if (arr[end] === elem) return end;
    if (arr[middle] === elem) return middle;
    if (elem < arr[middle]) end = middle - 1; 
    else start = middle + 1;
    middle = Math.floor( (start + end) / 2 );
  }
  return arr[middle] === elem ? middle : false;
}

console.log(binarySearch([1,3,5,6,7,8,15,17,19,25], 3));