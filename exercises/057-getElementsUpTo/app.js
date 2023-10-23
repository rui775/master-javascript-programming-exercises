function getElementsUpTo(array, n) {
  // your code here
  let myArr = array.slice(0, n);
  return myArr;
  
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
