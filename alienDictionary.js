const isAlienSorted = (words, order) => {
  const map = new Map();
  for (let position = 0; position < order.length; position++){
    let char = order[position];
    map.set(char, position); 
  }
  for(let i = 1; i < words.length; i++){ // initialize i = 1 -> prev = words[i-1] === words[0] 1st iteration 
    let prev = words[i-1], curr = words[i]; // 2 pointers
    if(map.get(prev[0]) > map.get(curr[0])) return false;
    else if(prev[0] === curr[0]){
      let pointer = 1;
      while(prev[pointer] === curr[pointer] && pointer < Math.max(curr.length, prev.length)) pointer++;
      if(curr[pointer] === undefined) return false;
      if(map.get(prev[pointer]) > map.get(curr[pointer])) return false;
    }
  }
  return true;
}

const a = isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"); // true
const a2 = isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"); //false
const a3 = isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz"); //false
console.log(a, a2, a3);