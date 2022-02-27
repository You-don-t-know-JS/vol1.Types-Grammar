// 글로벌 스코프 (1)

function foo(a) { // 중간의 스코프 (2)
    var b = a * 2;

    function bar(c) { // 가장 안쪽의 스코프 (3)
        console.log(a, b, c);
    }
    bar(b * 3);
}
foo(2);