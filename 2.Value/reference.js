function foo(x) {
  // a의 래퍼런스 사본이 x로 전달됨 (초기 래퍼런스1)
  x.push(4); // 초기 래퍼런스 1에 4를 push
  console.log(x); // [1,2,3,4]

  x = [4, 5, 6]; // 래퍼런스 2 새로 할당
  x.push(7);
  console.log(x); // [4,5,6,7]
}

let a = [1, 2, 3]; // 초기 래퍼런스 1
foo(a);
console.log(a); // [1,2,3,4]

function foo2(x) {
  // a의 래퍼런스 사본이 x로 전달됨 (초기 래퍼런스1)
  x.push(4); // 초기 래퍼런스 1에 4를 push
  console.log(x); // [1,2,3,4]

  x.length = 0; // 기존 배열을 즉시 비운다
  x.push(4, 5, 6, 7); // 기존 배열에 추가
  console.log(x); // [4,5,6,7]
}

a = [1, 2, 3];
foo2(a);

console.log(a); // [4,5,6,7]

function foo3(wrapper) {
  wrapper.a = 42;
}

let obj = {
  a: 2,
};

foo3(obj);
console.log(obj.a); //42

function foo4(x) {
  x = x + 1;
  console.log(x); // 3
}

a = 2;
b = new Number(a); // Number 객체 생성

foo4(b);
console.log(b); // [Number:2]
