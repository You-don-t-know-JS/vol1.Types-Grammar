# CH.4 Scope

> **스코프**란 특정 장소에 변수를 저장하고 나중에 그 변수를 찾는데 정의된 규칙.
> 쉽게 말해 **코드에 접근할 수 있는 범위**

## 1.1 컴파일러 이론
> 자바스크립트는 `컴파일러 언어`라고 한다. 

| 컴파일               | 인터프릿                      |
|-------------------|---------------------------|
| 프로그래밍 언어를 기계어로 해석 | 한번에 한줄씩 읽고 해석하며 프로그램을 구동  |
| 인터프리터보다 빠르게 실행된다  | 직접 코드를 구동시키기에 실행 속도는 느리다. |
| 수행 단계             |                           |
| 1. 어휘 분석(렉싱)      | 명령어 하나를 메모리에서 참조          |
| 2. 구문 분석(파싱)      | 명령어 해석                    |
| 3. 중간 코드 생성       | 필요 데이터 참조                 |
| 4. 최적화            | 명령 실행                     |
| 5. 코드 생성          |                           |

- 렉싱
  > 문자열을 조각으로 만드는 작업
  ```javascript
    var a = 2;
  
    var, a, =, 2 // 하나 하나 조각이 된다.
    ```

- 파싱
  > ATS 트리 구조로 형성
  ```javascript
    if (a===b) a + 1
  
                if              
        ===            +
     a       b       a     1
    ```
   
## 1.2 스코프 이해하기

- RHS Search
    -  특정 변수의 값을 찾는다.
  
  ```javascript
  // RHS 참조.
  // a를 찾아와라.
  console.log(a);
    ```
  > RHS는 **특정 변수를 값을 찾아오라**

- LHS Search
    - 값을 대입할 변수 컨테이너를 찾는다.
  
    ```javascript
  // LHS 참조.
  // a의 변수에 값 2를 대입해라.
  // 즉, 값 2를 넣을 변수 컨테이너를 찾는 것.
  a = 2;
    ```

그럼 RHS와 LHS 참조를 모두 수행하는 코드를 보며 해석해보자.

```javascript
// value라는 변수 컨테이너에 값 hello world를 넣어주는 LHS참조 
var value = 'hello world'

// console rorcpdptj log()메소드를 가져오는 RHS 참조
// value라는 변수를 찾아오는 RHS 참조
console.log(value)

function foo(parameter) {
    // console 객체에서 log()메소드를 가져오는 RHS 참조
    // parameter 를 찾아오는 RHS 참조
    console.log(parameter);
}

// foo() 함수를 찾아오는 RHS 참조
// 이 때, 주의해야하는 점이 parameter = 1 이라는 LHS 참조가 발생한다.
foo(1); 
```

## 1.3 중첩 스코프
 - 중첩 스코프(Scope Chain)
    > 블록이나 함수는 다른 블록, 함수안에 중첩될 수 있으므로 **스코프도 다른 스코프에 중첩**이 될 수 있다.
 
    이럴 경우, 현재의 지역 스코프에서 해당 변수를 찾지 못 할 경우, 바깥의 스코프로 넘어가 변수를 찾는다.

    가장 바깥 스코프인 최상위 스코프(global scope)에 도달할 때까지 계속된다.

    ```javascript
    function foo(a) {
        console.log(a + b); // 해당 함수에서는 b가 선언되지 않았으므로, 바깥의 스코프로 올라간다.
   }
   var b = 2;   // 현재 최상위 스코프로 foo(2) 동작 시 b로 참조된다.
   foo(2); // 4
      ```
   
>중첩 스코프의 규칙
- 현재 스코프에서 찾지 못하면, 한 단계씩 올라간다
- 최상위 스코프 까지 도달하면 변수를 찾았든 못 찾았든 멈춘다.

## 1.4 오류

> LHS와 RHS는 **변수가 선언되지 않았을 때 서로 다르게 동작한다.**

1. RHS 동작
   - ReferenceError
       ```javascript
       function foo(a) { // a = 2 를 대입하는 LHS
    
           // a, b에 관해서 RHS -> 하지만 변수 b에 대해선 그 어떤 스코프에서도 참조할 수 없다.
           // 그렇기에 변수 b에 대해서 ReferenceError 발생.
           console.log(a+b);
           b = a;
       }
    
       foo(2); // foo()를 호출하는 RHS
       ```
      - 결과   
      <img width="337" alt="image" src="https://user-images.githubusercontent.com/84619866/155861909-812b7f11-f3c6-4db7-a8a0-3631cb379e21.png">
   
   - TypeError
     ```javascript
     function foo(a) { // a = 2 를 대입하는 LHS
         // a를 RHS 참조로 가져왔지만 수행할 수 없는 동작
         console.log(a.map());
         b = a;
     }

     foo(2); // foo()를 호출하는 RHS
     ```
     - 결과
     <img width="366" alt="image" src="https://user-images.githubusercontent.com/84619866/155863058-e93c5d60-5f57-4235-9c8b-94c8e304bf8c.png">
2. LHS 동작(For you)

    ```javascript
    // LHS 참조 오류
    value = 2; // 글로벌 스코프에서 찾지 못했기 때문에 자바스크립트 엔진은 const value = 2 를 자동으로 만들어 준다
    console.log(value) // 2
    ```