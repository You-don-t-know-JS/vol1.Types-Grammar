let a = 5e10;
console.log(a); // 50000000000 = 5*10^10
console.log(a.toExponential()); // 5e+10

let b = a * a;
console.log(b); // 2.5e+21

let c = 1 / a;
console.log(c); // 2e-11

a = 42.59;
console.log(a.toFixed(0)); // '43'
console.log(a.toFixed(1)); // '42.6
console.log(a.toFixed(2)); // '42.59

//틀림
// 42.toFixed(0); // SyntaxError

//맞음
(42).toFixed(3);
(42).toFixed(3);
(42).toFixed(3);

a = 0.1 + 0.2;
b = 0.3;

console.log(a === b); // false
console.log(a); // 0.30000000000000004

console.log(Math.abs(a - b) < Number.EPSILON); // true

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
