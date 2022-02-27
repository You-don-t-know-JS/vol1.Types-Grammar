// RHS 참조에 관한 오류 동작
function foo(a) { // a = 2 를 대입하는 LHS

    // a, b에 관해서 RHS -> 하지만 변수 b에 대해선 그 어떤 스코프에서도 참조할 수 없다.
    // 그렇기에 변수 b에 대해서 ReferenceError 발생.
    console.log(a + b);

    // RHS 참조에는 문제가 없으나
    // 가져온 값으로는 해당 코드를 수행할 수 없으므로 TypeError 발생
    console.log(a.map());
}

foo(2); // foo()를 호출하는 RHS


// LHS 참조에 관한 오류 동작
value = 2; // 글로벌 스코프에서 찾지 못했기 때문에 자바스크립트 엔진은 const value = 2 를 자동으로 만들어 준다
console.log(value) // 2