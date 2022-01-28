# CH 02. Value

## 1. 배열

- 정적타입의 언어와는 달리 어떤 타입의 값이라도 담을 수 있는 그릇.

```
let a = [1, '2', [3], true, null, undefined, Symbol(1), {}];

console.log(a.length); // 8
a[0] === 1; // true
a[2][0] === 3; // true
```

- 배열 크기를 미리 정하지 않고도 선언할 수 있으며 원하는 값을 추가하면 된다. 이때 사이에 빈 슬롯이 있게되면 undefined로 나온다

```
let arr = [];
arr[0] = 1;
// arr[1] = '2'; 빈 슬롯
arr[2] = [3];

console.log(arr.length); // 3
console.log(arr[1]) // undefined
console.log(arr); // [1,<1 empty item>,[3]]
```

> 이때 arr[1]은 undefined지만 명시적으로 arr[1] = undefined를 세팅한 것과 똑같지는 않다.