# CH 02. Value

## 1. 배열

- 정적타입의 언어와는 달리 어떤 타입의 값이라도 담을 수 있는 그릇.

![array 1](https://user-images.githubusercontent.com/86486778/151645112-dfa4505c-9917-4b78-b0ad-d101f8bb9d15.png)


- 배열 크기를 미리 정하지 않고도 선언할 수 있으며 원하는 값을 추가하면 된다. 이때 사이에 빈 슬롯이 있게되면 undefined로 나온다

![array 2 - empty item](https://user-images.githubusercontent.com/86486778/151645143-eab5e019-0d10-446f-8386-8453cdadeec2.png)

> 이때 arr[1]은 undefined지만 명시적으로 arr[1] = undefined를 세팅한 것과 똑같지는 않다.
> 
> 길이는 차지하고 있지만 undefined조차 할당되어 있지 않은 배열이다.
> 
> 값이 존재하지 않기때문에 순회대상에서 제외된다.(forEach, map, filter, reduce 등등)
> 
>https://joooing.tistory.com/entry/undefined-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%95%8C%EA%B8%B0-1-undefined-empty-%F0%9F%A7%90

- 배열 자체도 하나의 객체여서 키/프로퍼티 문자열을 추가할 수 있다.
    
  - 하지만 배열 length는 증가하지 않는다.

![array 3 - property](https://user-images.githubusercontent.com/86486778/151645293-6d010295-8476-4f02-b811-96534fd9a451.png)

>키로 넣은 문자열 값이 10진수 숫자로 타입이 바뀌면 숫자키를 사용한 것 같은 결과가 초래된다.
![image](https://user-images.githubusercontent.com/86486778/151645395-f4697453-f54b-45f9-a3f4-dfc092d26963.png)

### 1.1 유사 배열
![isArray](https://user-images.githubusercontent.com/86486778/151646613-0ee75f5d-e36c-4816-8b51-0352f8107f4f.png)
> 배열처럼 생겼지만 배열 메소드 사용 불가능.
> 
>배열 프로토타입의 메서드를 빌려써야함
>
>Array.prototype.forEach.call(nodes, (el)=>{console.log(el);});

>또는 Array.from(nodes)를 사용하여 새로운 Array 객체를 만듬
>
>Array.from() 메서드는 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만듬.

## 2. 문자열
- 문자열은 배열과 비슷하다.(유사배열)
- length 프로퍼티, indexOf() 메서드, concat()메서드를 가진다.

>둘의 차이점은 문자열은 불변 값이지만 배열은 가변 값이다.

- 문자열 메서드는 항상 새로운 문자열을 생성한 후 반환한다.
- 반면 대부분의 배열 메서드는 그자리에서 곧바로 원소를 수정한다.

![string vs array](https://user-images.githubusercontent.com/86486778/151648140-527877e3-6daf-44ff-ba11-c734e67cbb4c.png)

- 불변값이기때문에 배열의 가변메서드를 사용할 수 없다.

![string reverse](https://user-images.githubusercontent.com/86486778/151648158-d3eb20b2-9041-47c1-8966-359e7077714e.png)

## 3. 숫자
- 자바스크립트의 숫자 타입은 number가 유일.
  
- 정수(integer)
- 부동 소수점 숫자(Float))
  
를 모두 아우른다.

### 3.1 숫자구문
- 소수점 앞 정수가 0이면 생략 가능하다
- 소수점 이하가 9일때도 생략 가능하다
- 대부분의 숫자는 10진수가 default
```
let a = .42;
let b = 42.3;
```

- 아주 크거나 작은 수는 지수형으로 표시하며 toExponential() 메서드의 결과값과 같다.


![exponential](https://user-images.githubusercontent.com/86486778/151652247-27d72e0b-a650-4c3e-a018-ce506edfd53e.png)

- 숫자 값은 Number 객체 래퍼로 박싱할 수 있기 때문에 Number.prototype 메서드로 접근할 수 있다.
  
ex)

![toFixed](https://user-images.githubusercontent.com/86486778/151652741-656875d1-830f-47b8-a7ab-075be678410b.png)

### 3.2 작은 소수 값

- 부동소수점의 오차로 인해 소수점 계산에 오차가 생김
- 미세한 오차가 Number.EPSILON으로 미리 정의되어있음

![EPSILON]](https://user-images.githubusercontent.com/86486778/151653145-d9b183f0-8c76-4dbd-87f0-1b07f8b2dcb1.png)

### 3.3 안전한 정수 범위

```
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

### 3.4 정수확인
```
Number.isInteger(a);
Number.isSafeInteger(a);
```

## 4. 특수 값

### 4.1 값 아닌 값
- undefiend 타입의 값은 undefined밖에 없다.
- null 타입의 값은 null밖에 없다.

### 4.2 Undefined
- undefined는 식별자로 쓸 수 있어 값을 할당 할 수 있다. (strict mode에서는 불가능)

![undefined](https://user-images.githubusercontent.com/86486778/151655631-8e97f4ee-a8ba-4b9e-b3de-11921fae86c9.png)

- 모드에 관계없이 undefined 라는 이름을 가진 변수를 생성할 수 있다.
  
![let undefined](https://user-images.githubusercontent.com/86486778/151655844-11192635-2c6e-4bb3-9e99-0589c8aa8b1a.png)

#### void 연산자
- undefined는 내장식별자로 수정하지 않으면 값이 undefined지만 void연산자로도 얻을 수 있다.
- void 연산자는 어떤값이든 무효로 만들어 항상 결과값을 undefined로 만든다. (이때 기존값은 건들지 않는다.)


![void](https://user-images.githubusercontent.com/86486778/151655907-98a8a771-dde4-4a39-976d-1e959fb304fb.png)
> 관례에 따라 void만으로 undefined 값을 나타내려면 void 0 이라고 쓴다.

### 4.3 특수 숫자
- 숫자 타입에는 몇가지 특수한 값이 있다.

#### The not number, number
- 수학 연산 시 두 피연사자가 전부 숫자(또는 평범한 숫자로 해석 가능한 10진수 또는 16진수)가 아닐 경우 유효한 숫자가 나올 수 없으므로 그 결과는 NaN이다.
- 하지만 type은 여전히 숫자이다.

![NaN](https://user-images.githubusercontent.com/86486778/151656954-529e6cb2-10da-4671-9f5a-cc19bfe24874.png)
> NaN은 직접 비교할 수 없다. 자기 자신과도 같지않아 isNaN() 내장 전역 유틸리티가 NaN여부를 말해준다.

>```
>window.isNaN('foo') //true
>Number.isNaN('foo') //false
>```

#### 무한대
