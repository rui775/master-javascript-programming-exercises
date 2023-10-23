function getAllLetters(str) {
    // your code here
    let arrStr = [];
    for (let char of str) {
        arrStr.push(char);
    }
    return arrStr;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
