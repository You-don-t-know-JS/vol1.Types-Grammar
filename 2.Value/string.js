let a = 'foo';
let b = ['f', 'o', 'o'];

let c = a.toUpperCase();
console.log(a === c); // false
console.log(a); // 'foo'
console.log(c); // 'FOO'

b.push('!');
console.log(b); // ['f','o','o','!']

a.reverse(); // a.reverse is not a function
b.reverse(); // [ 'f', 'o', 'o', '!' ]

c = a.split('').reverse().join('');
console.log(c); //oof
