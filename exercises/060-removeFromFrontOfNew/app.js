function removeFromFrontOfNew(arr) {
    // your code here
    let myArr = arr.slice(0, arr.length-1)
    return myArr;
    
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
