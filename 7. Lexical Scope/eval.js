function foo(str, a) {
    // 'use strict' 을 사용하면 렉시컬 스코프는 수정되지 않는다. 그러므로 console.log()의 결과로 1, 2 가 나온다.
    eval(str); // 'var b = 3' 문자열을 코드로 인식한다.
    console.log(a, b);
}
var b = 2;
foo("var b = 3;", 1) ;; // 1, 3