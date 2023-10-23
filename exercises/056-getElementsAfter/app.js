function getElementsAfter(array, n) {
  // your code here
  let myArr = array.slice(n+1)
  return myArr;
  
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
