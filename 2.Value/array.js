let a = [1, '2', [3], true, null, undefined, Symbol(1), {}];

console.log(a.length); // 8
a[0] === 1; // true
a[2][0] === 3; // true

let arr = [];
arr[0] = 1;
// arr[1] = '2';
arr[2] = [3];

console.log(arr.length); // 3
console.log(arr); // [1,'2',[3]]
