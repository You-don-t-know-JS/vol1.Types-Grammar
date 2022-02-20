# CH 05. Grammer

일반적으로 잘 쓰이지 않고 알려지지 않은 자바스크립트 문법 위주로 설명하였다.  
사용중에 사이드 이펙트를 발생시킬 수 있는 문법이다.

## 1. 문과 표현식

- 문(Statement)과 표현식(Expression)은 다르다    
  > 문은 프로그램을 구성하는 기본 단위이자 최소 실행 단위이다.  
  > 즉 표현식은 값으로 평가될 수 있는 문 이다.  
  > 문은 하나 이상의 어구, 연산자 등으로 구현되는데, 이때 어구는 표현식에 해당한다.    

### 1. 문의 완료 값

- 모든 문은 항상 완료값을 가진다.

```js
// 단순한 표현식도 완료값을 가진다.
var b = a; // return undefined

// 블록의 완료값은 암시적으로 마지막 문의 값이다.
var c;
if(true) {
    c = 4 + 38;
} // return 42

// 그러나 완료값이 있음에도 다음과 같은 코드는 작동하지 않는다.
var d, e;
d = if(true) {
    e = 4 + 38;
};
console.log(d);
```

### 2. 표현식의 부수 효과

- 부수효과가 있는 표현식이 존재한다.
- `++, --, delete, =` 등이 있다.

---

- ++, -- 같은 경우에는 부수효과가 발생하는 타이밍이 다르다.
- 앞에다 놓으면 전위 연산자, 뒤에다 놓으면 후위 연산자라고 부른다.  
```js
var a = 42;
// 후위 연산자
a++; // 42
a; // 43
//전위 연산자
++a; // 44  
a; // 44
```
- 콤마 연산자 ,를 사용하면 다수의 개별 표현식을 하나의 문으로 연결한다.  
```js
var a = 42,
  b;

b = (a++, a); // a 표현식은 a++ 표현식의 부수효과가 발생한 이후에 평가된다.  

a; // 43
b; // 43
```
- = 는 값을 할당하는 부수효과를 가진다.  
```js
var a;
a = 42;

// 할당하는 부수 효과와 완료값을 이용하여 연쇄 할당문을 만들 수 있다.   
var a, b, c;
a = b = c = 42;
// c = 42의 평과 결과는 42이고, 42가 c에 할당되는 부수효과를 가진다.  
// b = c의 평과 결과도 동일하게 진행된다.  
```

### 3. 콘텍스트 규칙

- 자바스크립트는 같은 구문이지만 어디에서 어떤 식으로 사용하느냐에 따라 다른 의미를 가지는 경우가 있다. 대표적으로 중괄호가 있다.

1. 객체로써 사용되는 경우
2. 레이블
   - 자바스크립트는 레이블 문 이라고 하는 (잘 알려지지 않은, 권장하지 않는)특수한 기능이 있다.
   - 레이블을 사용하면 다른 문법의 goto와 비슷한 레이블 점프라는 기능을 사용할 수 있다.

```js
foo : for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
        if((i * j)  >= 3){
            console.log("그만!", i, j);
            break foo; // foo 레이블 밖으로 나가 그 이후부터 계속하라
        }
        console.log(i, j);
    }
}
// 레이블 점프를 사용하여 코드블록을 무시하고 foo 함수가 종료된다.
```

> JSON 문자열은 사실 js레이블 문법에 맞지 않다. 따라서 보통 JSON-P 방식으로 함수에 실어 보내는 방식으로 읽어들인다.   
> 이유는 자바스크립트 문의 레이블은 따옴표로 감싸면 안 되기 때문에 "a" : 은 문법에 맞는 레이블이 아니며, 따라서 :이 뒤에 오면 안 된다.
> {"a": 42} 는 완전히 올바른 JSON값이지만, 그 자체로는 레이블이 잘못된 문 블록으로 해석되므로 foo({"a":42})로 객체 리터럴 처리를 해준다.  

3. 블록  
```js
[] + {}; // [object Object] // {} 을 객체로 읽는 상태
{} + []; // 0 // {} 을 블록으로 읽는 상태?
```

4. 객체 분해
   - es6의 분해 할당 문법 const { a, b } = data;
5. else if
- else if는 실제로 있는 문법이 아니고 자바스크립트 내부에서 파싱되어 사용된다.

```js
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
```

## 2. 연산자 우선순위

- 자바스크립트 연산자에는 우선순위가 있어서 작성자의 예상과 실제 코드 순서가 다르게 흘러갈 수 있다.  
  > , 연산자는 = 연산자보다 우선순위가 낮다  
  > && 연산자가 먼저 평가되고 || 연산자가 그 다음에 평가된다.  
  > 이외에도 다양하게 있다. https://goo.gl/V1aikc  

### 1. 단락 평가

- &&, || 연산자는 좌측 피연산자의 평가 결과만으로 전체 결과가 이미 결정될 경우 우측 피연산자의 평가를 건너뛴다.

```js
function func(opts) {
    if(opts && opts.cool){
      console.log(1);
    }
}
//opts에서 실패하게 되면 opts.cool은 확인하지 않고 falsy가 된다.
```

### 2. 끈끈한 우정

- && 는 || 보다, || 는 ? : 보다 우선순위가 높다.

### 3. 결합성

- 연산자는 좌측부터 그룹핑이 일어나는지 우측부터 그룹핑이 일어나는지에 따라 좌측 결합성 또는 우측 결합성을 가진다.
- &&, || 는 좌측 결합성(그룹핑) 연산자이다.
- ? : (삼항 또는 조건) 연산자는 우측 결합성 연산자이다.

```js
const a = 1, b = 2, c = 3, d = 4, e = 5;
a ? b : c ? d : e;
// 문은 아래처럼 해석된다.(우측 결합성)
a ? b : (c ? d : e);
// 문은 아래처럼 해석되지 않는다.
(a ? b : c) ? d : e;
```

- = 도 우측 결합성 연산자이다.

```js
var a, b, c;
a = b = c = 42;
//는 아래처럼 해석된다.
a = (b = (c = 42));
```

## 3. 세미콜론 자동 삽입

- ASI(Automatic Semicolon Insertion)는 자바스크립트 프로그램의 세미콜론이 누락된 곳에 엔진이 자동으로 ;를 삽입한다.
- ASI는 행바꿈에만 적용되며 줄 중간에 삽입되지는 않는다.
- 문 블록에서 ;는 필수가 아니므로 적용되지 않는다.

```js
var a = 42;
while(a) // ;이 삽입된다
while (a) {
  console.log(1);
} // <- ;는 삽입되지 않는다.
a;
```

### 1. 에러 정정

```js
//에러가 나는 코드
function foo(a) {
  return;
  a * 2 + 3 / 12; // 괄호를 생략한다면 return; 으로 해석되어 undefined가 반환된다.
}
```

## 4. 에러

- 자바스크립트는 컴파일 시점에 발생하는 에러가 문법적으로 정의되어 있다.

### 1. 너무 이른 변수 사용

- TDZ(Temporal Dead Zone) 은 아직 초기화를 하지 않아 변수를 참조할 수 없는 코드 영역이다.

```js
a = 2; // ReferenceError;
let a;
```

## 5. 함수 인자

- 함수 인자의 디폴트값은 마치 하나씩 좌측부터 우측으로 let선언을 한 것과 동일하게 처리된다.

```js
var b = 3;
function foo(a = 42, b = a + b + 5){
  console.log(a, b);
}
// a는 에러가 나지 않으나 b는 let 선언 이전에 할당이 일어난 처리가 되어 TDZ로 인해 에러가 생긴다.
```

- ES6 디폴트 인자 값은 함수에 인자를 넘기지 않거나 undefined를 전달했을 때 적용된다.
- undefined 인자를 명시적으로 넘기면 arguments 배열에도 값이 undefined인 원소가 추가되는데, 여기에 해당하는 디폴트 인자 값과 다르다.

```js
function foo(a = 42, b = a + 1) {
  console.log(arguments.length, a, b, arguments[0], arguments[1]);
}
foo(10); // 1 10 11 10 undefined
foo(10, undefined); // 2 10 11 10 undefined
foo(10, null); // 2 10 null 10 null
```

```js
function foo(a){
    a = 42;
    console.log(arguments[0]);
}
foo(2); // 42 (연결)
foo(); // undefined (연결되지 않는다)
```
## 6. try ... finally
- finally 절의 코드는 **어떤 일이 있어도 반드시** 실행되게 만들었다. 따라서 finally절의 코드는 몇가지 특수한 기능이 있다.
  1. try 절의 return은 함수의 완료값으로 두고 여전히 실행된다.
  2. try 절의 throw를 완료값으로 두고 여전히 실행된다.
  3. finally 절의 throw가 있다면 try절의 실행을 무시하고 예외처리된다.
  4. try 절의 continue나 break를 무시한다.
```js
// 1. 
function foo(){
  try{
    return 42;
  }
  finally{
    console.log('hello');
  }
  console.log('실행되지 않는다');
}
console.log(foo());
// hello
// 42
// 2.
function foo2(){
  try{
    throw 42;
  }
  finally{
    console.log('hello');
  }
  console.log('실행되지 않는다')
}
console.log(foo2());
// hello
// Uncautht Exception: 42
// 3. 
function foo3(){
  try{
    return 42;
  }
  finally{
    throw '어이쿠';
  }
  console.log('실행되지 않는다');
}
console.log(foo3());
// Uncaught Exception 어이쿠
// 4.
for(var i = 0; i < 10; i++){
  try{
    continue;
  }
  finally{
    console.log(i);
  }
}
// 0 1 2 3 4 5 6 7 8 9
```
- finally 절의 return은 그 이전에 실행된 try나 catch 절의 return 을 덮어쓰는 기능을 한다. **단 반드시 명시적으로 return 문을 써야 한다.** (1에서 return이 최종값으로 존중되는 경우는 finally의 return이 명시적이지 않을 경우 이다.)
```js
function foo(){
  try{
    return 42;
  }
  finally{
    //아무것도 없으므로 try의 return 이 최종 값이 된다.
  }
}
function bar(){
  try{
    return 42;
  }
  finally{
    return; // try의 return 을 무시한다.
  }
}
function baz(){
  try{
    return 42;
  }
  finally{
    return 'hello';
  }
}
console.log(foo()); // 42
console.log(bar()); // undefined
console.log(baz()); // hello
```

## 7. switch
- switch문에도 특수한 기능이 있다.
  1. switch 표현식과 case 표현식 간의 매치 과정은 === 알고리즘과 똑같다. 즉 == 비교처럼 강제변환을 하려면 특수한 방법이 필요하다.
  2. case의 평가 결과가 truthy이지만 엄격하게 true가 아닐 경우에도 매치는 실패한다.
  3. default 절은 선택사항이며 꼭 끝부분에 쓸 필요는 없다. break는 필수
```js
// 1.
var a = '42';
switch(true){
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

// 2. 
var a = 'hello world';
var b = 10;
switch(true){
  case (a || b == 10);
    break;
  default:
   console.log('어이쿠');
   break;
}
// 어이쿠

// 3. 
var a = 10;
switch(a){
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
```
