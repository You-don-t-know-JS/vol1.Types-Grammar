function foo() {
  undefined = 2;
}

foo();

function foo() {
  'use strict';
  undefined = 2; // Cannot assign to read only property 'undefined' of object '#<Object>'
}

foo();

//모드에 관계없이 undefined라는 이름을 가진 변수 생성이 가능하다.
function foo() {
  'use strict';
  let undefined = 2;
  console.log(undefined); // 2
}

foo();

let a = 42;
console.log(void a, a); // undefined 42

a = 2 / 'foo'; //NaN
console.log(typeof a); // 'number'
console.log(a === NaN); // false
console.log(isNaN(a)); // true

a = 1 / 0;
b = -1 / 0;

console.log(a); // Infinity
console.log(b); // -Infinity

a = 0 / -3; // -0
b = 0 * -3; // -0

String(-0); // "0"
Number('-0'); // -0

a = 0;
b = 0 / -3;
console.log(a === b); //true
console.log(0 === -0); //true

function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

console.log(isNegZero(-0)); //true
console.log(isNegZero(0 / -3)); //true
console.log(isNegZero(0)); //false

a = -2 / 'foo'; //NaN
b = -3 * 0;

console.log(Object.is(a, NaN)); // true
console.log(Object.is(b, -0)); // true
console.log(Object.is(b, 0)); // false

a = 2;
b = a; //b는 언제나 a에서 값을 복사한다.
b++;

console.log(a); // 2
console.log(b); // 3

let c = [1, 2, 3];
let d = c; //d는 공유된 '[1,2,3]' 값의 레퍼런스다.
d.push(4);

console.log(c); // [1,2,3,4]
console.log(d); // [1,2,3,4]
