function getAllWords(str) {
    // your code here
    let myArr = str.split(" ");
    return myArr;
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
