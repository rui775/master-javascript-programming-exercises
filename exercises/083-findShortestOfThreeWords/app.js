function findShortestOfThreeWords(word1, word2, word3) {
    let aux = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    if (word1.length < aux.length) aux = word1;
    if (word2.length < aux.length) aux = word2;
    if (word3.length < aux.length) aux = word3;
    return aux;
    
}

let output = findShortestOfThreeWords('ammmmmm', 'two', 'three');
console.log(output); // --> 'a'
