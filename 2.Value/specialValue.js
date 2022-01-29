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
