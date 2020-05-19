const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const selectionSort = (arr) => {
  for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[min]) min = j;
    }
    if (i !== min) swap(arr, i, min);
  }
  return arr;
}

const s = selectionSort( [2,3,38,5,47,15,36,26,27,44,46,19,50,48] );
console.log(s);