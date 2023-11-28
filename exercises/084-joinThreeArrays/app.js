function joinThreeArrays(arr1, arr2, arr3) {
  return arr1.concat(arr2, arr3);

  // with spread operator
  // let aux = [...arr1, ...arr2, ...arr3];
  // return aux;
}

let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]