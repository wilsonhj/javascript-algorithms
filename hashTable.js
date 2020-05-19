// const hash = (str, max) => {
//   let hash = 0;
//   for(let i=0; i < str.length; i++){
//     hash += str.charCodeAt(i);
//     console.log(hash);
//   }
//   return hash % max;
// }



// const hash = (key, arrayLen) => {
//   let total = 0;
//   for (let char of key){
//     let value = char.charCodeAt(0) - 96; // map a to 1 , b to 2 , c to 3
//     total = (total + value) % arrayLen;
//     console.log(total);
//   }
//   return total + '  total ';
// };


const hash = (key, arrayLen) => {
  let total = 0;
  const PRIME = 31;
  for(let i = 0; i < Math.min(key.length, 100); i++){
    let char = key[i];
    let value = char.charCodeAt(0) - 96; // a = 1 b = 2 
    total = (total * PRIME + value) % arrayLen;
    console.log(total);
  }
  return total;
}

console.log(hash('kevin', 29));
// console.log(hash('hirokazu', 8191));

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size); // prime Array
  }

  _hash(key){
    let total = 0;
    const PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys(){
    const keysArr = [];
    for(let i= 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values(){
    const valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){ // only push unique values
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

const ht = new HashTable();
ht.set("hirokazu", "james");

console.log(ht);
console.log(ht.keys());
console.log(ht.values());

ht.keys().forEach(key => console.log(ht.get(key))); //vals
