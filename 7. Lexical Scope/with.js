var obj = {
    a: 1,
    b: 2,
    b: 3,
}

// 매우 귀찮은 작업.. 하나씩 변경해준다
obj.a = 2
obj.b = 3
obj.c = 4

console.log(obj) // { a: 2, b: 3, c: 4 }

// with를 사용한 방법
with (obj) {
    a = 3;
    b = 4;
    c = 5;
}
console.log(obj) // { a: 3, b: 4, c: 5 }