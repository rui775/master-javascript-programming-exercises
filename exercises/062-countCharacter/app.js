function countCharacter(str, char) {
    // your code here
    let count = 0;
    for (let element of str) {
        if (element === char) count++;
    }
    return count;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
