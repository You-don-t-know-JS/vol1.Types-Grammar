# CH 03. Native
> 네이티브란?
- 특정환경에 종속되지 않은, ECMAScript 명세의 **내장객체**이며,함수형태이다.(ex.window는 브라우저환경에 종속됨)
- String()
- Number()
- Boolean()
- Array()
- Object()
- Function()
- RegExp()
- Date()
- Error()
- Symbol() 

> new String('abc') 은 '문자열 래퍼를 생성'하고, 원시값'abc'와는 다름!
<img width="835" alt="스크린샷 2022-02-04 오후 5 29 19" src="https://user-images.githubusercontent.com/67423755/152496557-c335c159-773e-4e41-89b5-d9dd71c86050.png">


<br/><br/>
## 3.1. 내부 [[ Class ]] ( 내부 프로퍼티 )
- 내부프로퍼티에는 직접 접근할 수는 없고 Object.prototype.toString()라는 메서드에 값을 넣어 호출함으로써 엿볼 수 있다.
- **object(배열,정규표현식 등)** :object에는 [[ Class ]]라는 내부 프로퍼티가 추가로 붙음.
- **null, undefined** : 네이티브 생성자는 없지만 내부 [[ Class ]] 값은 확인할 수 있다.
- **그밖에 원시값들(문자열,숫자,불리언)** : 자동으로 boxing과정을 거쳐 객체래퍼가 됨.
<img width="796" alt="스크린샷 2022-02-04 오후 5 30 49" src="https://user-images.githubusercontent.com/67423755/152496987-a7ff8801-9467-40fb-a854-7a3e843639dd.png">





<br/><br/>

## 3.2. 래퍼 박싱하기
- 아마 다른언어에서는 .length 나 .toString()으로 접근하려면 원시값을 객체래퍼로 감싸줘야하는데, 자바스크립트에서는 자동으로 래핑함.
- 객체 형태로 직접 '선 최적화'하면 프로그램이 더 느려질 수 있음.

> 그러니 new String('abc'), new Number(42) 처럼 코딩하지 말고 그냥 알기 쉽게 원시값 'abc', 42를 사용하자.

### 3.2.1. 객체 래퍼의 함정
- 객체 래퍼를 사용할때 조심해야할 함정이 있다.
<img width="780" alt="스크린샷 2022-02-04 오후 5 31 45" src="https://user-images.githubusercontent.com/67423755/152497156-5668a7e4-6b58-4dd9-bb6d-a2d5af3966df.png">

<br/><br/>

## 3.3. 언박싱
- 객체 래퍼의 원시값은 valueOf() 메서드로 추출한다.
<img width="777" alt="스크린샷 2022-02-04 오후 5 35 59" src="https://user-images.githubusercontent.com/67423755/152497781-c98e83b1-b544-435a-9764-f64f6481c453.png">

<br/><br/>

## 3.4. 네이티브, 나는 생성자다
- 배열, 객체, 함수, 정규식 값은 리터럴 형태로 생성하는 것이 일반적이며, 리터럴은 생성자 형식으로 만든 것과 동일한 종류의 객체를 생성한다.
- 그리고 앞서 언급한 것처럼 생성자는 가급적 쓰지 않는 편이 좋다.



### 3.4.1. Array()
> 이상한 빈 슬롯 배열을 만들어 쓰지말자!
- Array(1,2,3)과 new Array(1,2,3)은 같다, 하지만 배열의 크기를 미리 정하는건 이상하다.(나중에 까먹으면 어쩌려고?)
- 빈배열을 만들고 나중에 length프로퍼티에 숫자값을 할당하는게 맞음(빈배열 생기면 안된다.)
- 빈배열 말고 'undefined' 값 원소로 채워진 배열 생성 하는 방법? ::: Array.apply(null, {length:3}) ::: -> Array(3)보다 훨씬 나음
<img width="809" alt="스크린샷 2022-02-05 오후 3 52 01" src="https://user-images.githubusercontent.com/67423755/152632040-58df7750-b1f4-41ed-ae36-d95e3c967074.png">


### 3.4.2. Object(), Function(), and RegExp() 
- Object() 생성자는 쓸일이 없다. 리터럴로 한번에 정의할 수 있는데 굳이?
- Function() 생성자는 함수의 인자나내용을 동적으로 정의해야하는 **매우드문경우**에 한해 유용함. 하지만 거의 없다.
- RegExp() 생성자는 정규표현식 패턴을 동적으로 정의해야하는 경우 :: new RegExp("패턴","플래그")
<img width="738" alt="스크린샷 2022-02-04 오후 5 36 50" src="https://user-images.githubusercontent.com/67423755/152497882-a289b2c2-5846-4ca0-8ba2-1797d46eab68.png">

### 3.4.3. Date(), Error()
- 리터럴 형식이 없어서 다른 네이티브에 비해 유용하다.
- date 객체값은 new Date()로 생성한다. date 객체의 인스턴스로부터 getTime()을 호출하면 됨. === Date.now() 사용하면 됨. 이게 더 간단함.
- error 객체는 현재 실행콘텍스트를 포착해서 객체에 담는것이다. 보통 throw 연산자와 함께 사용함.
<img width="691" alt="스크린샷 2022-02-04 오후 5 37 03" src="https://user-images.githubusercontent.com/67423755/152497934-0e0b96af-da06-44dc-9779-8baea61647cc.png">

### 3.4.4. Symbol()
- ES6에서 처음 도입
- Symbol은 앞에 new를 붙이면 에러가 나는 유일한 네이티브 생성자이다.
- 즉 충돌염려 없이 객체 프로퍼티로 사용가능한 , 특별한 '유일값'이다.
- 앞으로 (_)가 앞에 붙는 프로퍼티명도 심벌로 대체될 가능성이 높다.
- Symbol은 객체가 아니고, 단순한 스칼라원시값이다.

### 3.4.5. 네이티브 프로토타입
- 내장 네이티브 생성자는 .prototype 객체를 가진다.
- String.prototype 객체에 정의된 메소드에 접근할 수 있다. 프로토타입의 위임덕에 모든 문자열이 이 메서드를 같이 쓸 수 있다.
- 변수에 값이 할당되지 않은 상태에서 Function.prototype: 빈함수, RegExp.prototype:빈 정규식, Array.prototype: 빈배열은 모두 적당한 디폴트 값이다.

<br/><br/>

## 3.5. 정리하기
- 정리하자면 자바스크립트의 7가지 자료형을 사용한 코드들이(변수에서 함수를 호출하던 행위) 자동적으로 '객체 래퍼로 박싱되는 과정을 거친다'는 동작원리를 이해하면 될것 같다
- 특정상황이 아니면 왠만해선 굳이 new를 이용해서 객체를 만들지 말자.
