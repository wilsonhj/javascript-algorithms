const insertionSort = arr => { // time O(N^2) worst/average case 
  for (let i = 0; i < arr.length; i++){
    let currentVal = arr[i];
    let j;
    for(j = i - 1; j >= 0 && arr[j] > currentVal; j--){ // decrement pointer
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

const s = insertionSort([2,1,4,3,76,5]);
console.log(s);

const s2 = insertionSort([2,4,2,2,456,3,1,0]); // O(1) space
console.log(s2);