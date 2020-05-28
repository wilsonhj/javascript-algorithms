const mergeSort = arr => {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted)
}

const merge = (left, right) => {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      result.push(left[i]);
      i++;
    }
    else {
      result.push(right[j]);
      j++
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const m = mergeSort([1,4,2,-4,6,2,19]);
console.log(m);