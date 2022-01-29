let a = [1, '2', [3], true, null, undefined, Symbol(1), {}];

console.log(a.length); // 8
a[0] === 1; // true
a[2][0] === 3; // true

let arr = [];
arr[0] = 1;
// arr[1] = '2'; 빈 슬롯
arr[2] = [3];

console.log(arr.length); // 3
console.log(arr[1]); // undefined
console.log(arr); // [1,<1 empty item>,[3]]
arr.forEach((val, i) => console.log(val, i));
// 1 0
// [3] 2

a = [];
a[0] = 1;
a['foobar'] = 2;

console.log(a.length); // 1
console.log(a['foobar']); // 2
console.log(a.foobar); // 2

a = [];
a['5'] = 42;
console.log(a.length); // 6
console.log(a); // [ <5 empty items>,42]

const nodes = document.querySelectorAll('div'); // NodeList [div,div,div,div, ...]
const els = document.body.children; // HTMLCollection [noscript, link, div, sciprt, ...]

console.log(Array.isArray(nodes)); // false
console.log(Array.isArray(els)); // false
