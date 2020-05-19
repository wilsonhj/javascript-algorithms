const pivot = (arr, start = 0, end = arr.length-1) => {
  const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

  let pivot = arr[start];
  let swapIndex = start;

  for(let i = start + 1; i <= end; i++){
    if(pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex); // swap start index <--> swap index
  return swapIndex; // median value of array
}

const quickSort = (arr, left = 0, right = arr.length-1) => {
  if(left < right){
    let pivotIndex = pivot(arr, left, right); // median value
    quickSort(arr, left, pivotIndex-1); // left
    quickSort(arr, pivotIndex+1, right); // right
  }
  return arr;
}

const QS = quickSort([4,8,2,1,5,7,6,3,0]);
console.log(QS);