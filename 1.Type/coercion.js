const a = 42;
const b = a + '';
const c = String(a);

console.log(b, typeof b); // 42 string , 암시적 강제변환
console.log(c, typeof c); // 42 string , 명시적 강제변환
