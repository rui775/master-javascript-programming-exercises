let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj[key] < num || typeof(obj[key]) === "string") newObj[key] = obj[key];
    }
    return newObj;
}



removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
console.log(removeNumbersLargerThan(5, obj))