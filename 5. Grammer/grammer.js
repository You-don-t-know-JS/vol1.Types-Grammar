const _1_1 = () => {
  // 단순한 표현식도 완료값을 가진다.
  var b = a; // return undefined

  // 블록의 완료값은 암시적으로 마지막 문의 값이다.
  var c;
  if (true) {
    c = 4 + 38;
  } // return 42

  // 그러나 완료값이 있음에도 다음과 같은 코드는 작동하지 않는다.
  var d, e;
  // d = if(true) {
  //     e = 4 + 38;
  // };
}
// console.log(_1_1());

const _1_2_1 = () => {
  // ++, -- 같은 경우에는 부수효과가 발생하는 타이밍이 다르다.
  // 앞에다 놓으면 전위 연산자, 뒤에다 놓으면 후위 연산자라고 부른다.  
  var a = 42;
  console.log(a);
  // 후위 연산자
  console.log(a++); // 42
  console.log(a); // 43
  //전위 연산자
  console.log(++a); // 44  
  console.log(a); // 44
}
// console.log(_1_2_1())

const _1_2_2 = () => {
  var a = 42, b;

  b = (a++, a); // a 표현식은 a++ 표현식의 부수효과가 발생한 이후에 평가된다.  

  console.log(a); // 43
  console.log(b); // 43
}
// console.log(_1_2_2());

const _1_2_3 = () => {
  //= 는 값을 할당하는 부수효과를 가진다.  
  var a;
  a = 42;

  // 할당하는 부수 효과와 완료값을 이용하여 연쇄 할당문을 만들 수 있다.   
  var a, b, c;
  a = b = c = 42;
  console.log(a);
  console.log(b);
  console.log(c);
  // c = 42의 평과 결과는 42이고, 42가 c에 할당되는 부수효과를 가진다.  
  // b = c의 평과 결과도 동일하게 진행된다.  
}

// console.log(_1_2_3());

const _1_3_1 = () => {
  //자바스크립트는 레이블 문 이라고 하는 (잘 알려지지 않은, 권장하지 않는)특수한 기능이 있다.
  //레이블을 사용하면 다른 문법의 goto와 비슷한 레이블 점프라는 기능을 사용할 수 있다.
  foo: for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if ((i * j) >= 3) {
        console.log("그만!", i, j);
        break foo; // foo 레이블 밖으로 나가 그 이후부터 계속하라
      }
      console.log(i, j);
    }
  }
  // 레이블 점프를 사용하여 코드블록을 무시하고 foo 함수가 종료된다.
}

// console.log(_1_3_1());

const _1_3_2 = () => {
  const a = [] + {}; // [object Object] // {} 을 객체로 읽는 상태
  const b = {} + []; // 0 // {} 을 블록으로 읽는 상태
  console.log(a);
  console.log(b);
  //????
}

// console.log(_1_3_2());

const _1_3_3 = () => {
  // else if는 실제로 있는 문법이 아니고 자바스크립트 내부에서 파싱되어 사용된다.
  if (a) {
  } else if (b) {
  }
  // --> 파싱
  if (a) {
  } else {
    if (b) {
    } else {
    }
  }
}

const _2_1_1 = () => {
  function func(opts) {
    if (opts && opts.cool) {
      console.log(1);
    }
  }
  //opts에서 실패하게 되면 opts.cool은 확인하지 않고 falsy가 된다.

  func();
  func({});
  func({ cool: 1 });
}
// console.log(_2_1_1());

const _2_3_1 = () => {
  // ? : (삼항 또는 조건) 연산자는 우측 결합성 연산자이다.

  const a = 1, b = 2, c = 3, d = 4, e = 5;
  console.log(a ? b : c ? d : e);
  // 문은 아래처럼 해석된다.(우측 결합성)
  console.log(a ? b : (c ? d : e));
  // 문은 아래처럼 해석되지 않는다.
  console.log((a ? b : c) ? d : e);
}

// console.log(_2_3_1());

const _2_3_2 = () => {
  // = 도 우측 결합성 연산자이다.

  var a, b, c;
  a = b = c = 42;
  console.log(a);
  //는 아래처럼 해석된다.
  a = (b = (c = 42));
  console.log(a);
}
// console.log(_2_3_2());

const _3_1_1 = () => {

  var a = 42;
  while (a) // ;이 삽입된다

    while (a) { } // <- ;는 삽입되지 않는다.
  a;
}

// console.log(_3_1_1());

const _3_1_2 = () => {
  //에러가 나는 코드
  function foo(a) {
    return;
    // a * 2 + 3 / 12; // 괄호를 생략한다면 return; 으로 해석되어 undefined가 반환된다.
    // 린터가 에러를 자꾸 지움
  }
  foo(1);
}

// console.log(_3_1_2());


const _4_1 = () => {

  a = 2; // ReferenceError;
  let a;
}
// console.log(_4_1());

const _5_1 = () => {

  var b = 3;
  function foo(a = 42, b = a + b + 5) {
    console.log(a, b);
  }

  // a는 에러가 나지 않으나 b는 let 선언 이전에 할당이 일어난 처리가 되어 TDZ로 인해 에러가 생긴다.
  foo();
}
// console.log(_5_1());

const _5_2 = () => {

  function foo(a = 42, b = a + 1) {
    console.log(arguments.length, a, b, arguments[0], arguments[1]);
  }
  foo(10); // 1 10 11 10 undefined
  foo(10, undefined); // 2 10 11 10 undefined
  foo(10, null); // 2 10 null 10 null
}
// console.log(_5_2());

const _5_3 = () => {

  function foo(a) {
    a = 42;
    console.log(arguments[0]);
  }
  foo(2); // 42 (연결)
  foo(); // undefined (연결되지 않는다)
}
// console.log(_5_3());

const _6_1 = () => {
  // 1. 
  function foo() {
    try {
      return 42;
    }
    finally {
      console.log('hello');
    }
  }
  console.log(foo());
  // hello
  // 42
  console.log('---')

  // 2.
  function foo2() {
    try {
      throw 42;
    }
    finally {
      console.log('hello');
    }
  }
  console.log(foo2());

  // hello
  // Uncautht Exception: 42

  console.log('---')
  // 3. 
  function foo3() {
    try {
      return 42;
    }
    finally {
      throw '어이쿠';
    }
  }
  console.log(foo3());
  // Uncaught Exception 어이쿠
  console.log('---')

  // 4.
  for (var i = 0; i < 10; i++) {
    try {
      continue;
    }
    finally {
      console.log(i);
    }
  }
  // 0 1 2 3 4 5 6 7 8 9
  console.log('---')

}

// console.log(_6_1());

const _6_2 = () => {

  function foo() {
    try {
      return 42;
    }
    finally {
      //아무것도 없으므로 try의 return 이 최종 값이 된다.
    }
  }
  function bar() {
    try {
      return 42;
    }
    finally {
      return; // try의 return 을 무시한다.
    }
  }
  function baz() {
    try {
      return 42;
    }
    finally {
      return 'hello';
    }
  }
  console.log(foo()); // 42
  console.log('---')

  console.log(bar()); // undefined
  console.log('---')

  console.log(baz()); // hello
  console.log('---')

}
// console.log(_6_2());

const _7 = () => {
  // 1.
  var a = '42';
  switch (true) {
    case a == 10:
      console.log(10);
      break;
    case a == 42:
      console.log(42);
      break;
    default:
      break;
  }
  // 42
  console.log('---')

  // 2. 
  var a = 'hello world';
  var b = 10;
  switch (true) {
    case (a || b == 10):
      break;
    default:
      console.log('어이쿠');
      break;
  }
  // 어이쿠
  console.log('---')

  // 3. 
  var a = 10;
  switch (a) {
    case 1:
    case 2:
    //never gets here
    default:
      console.log('default');
    case 3:
      console.log('3');
      break;
    case 4:
      console.log('4');
  }
  // default
  // 3
  console.log('---')

}

console.log(_7());