const flatten1 = arr => arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten1(cur) : cur)
}, [])

function flatten2(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

function flatten3(arr) {
    return arr.toString().split(',').map((item)=>{
        return parseInt(item)
    });
}

function flatten4(arr) {
    return arr.flat(Infinity);
  }

const arr = [[1, 2, 3], 4, 5, [6, [7, 8, [9]]]];

console.log(flatten1(arr));
console.log(flatten2(arr));
console.log(flatten3(arr));
console.log(flatten4(arr));