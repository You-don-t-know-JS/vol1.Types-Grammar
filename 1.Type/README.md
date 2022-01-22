# CH 01. Type

> Type이란 자바스크립트 엔진, 개발자 모두에게 어떠한 값을 다른 값과 분별할 수 있는, 고유한 내부 특성의 집합이다.

-   어떤 형태로든 거의 모든 자바스크립트 프로그램에서 강제변환 (coercion)이 일어나므로 타입을 확실하게 인지하고 사용하는 것이 중요하다.
    (4장 참고)
    ![carbon (9)](https://user-images.githubusercontent.com/49370511/150651296-145fd702-4ed6-4da6-b69f-1b2a80022ad7.png)

<br/>
<br/>

## 내장 타입

-   **null** (Primitives)
-   **undefined** (Primitives)
-   **boolean** (Primitives)
-   **number** (Primitives)
-   **string** (Primitives)
-   **object**
-   **symbol** (Primitives)

**typeof 연산자**로 위 내장 타입들을 확인했을 때, **null**만 자신의 명칭과 동일한 문자열을 반환하지 않는 것을 확인할 수 있다.
![carbon (10)](https://user-images.githubusercontent.com/49370511/150651471-e7790d64-1a05-4f6c-8e77-c261ad478541.png)

<br/>
<br/>

### truthy / falsy

![carbon (11)](https://user-images.githubusercontent.com/49370511/150651662-b86f932a-567d-41dc-81c6-054c845078b7.png)

-   불리언 문맥 상 true/false로 봐야 하는 값
-   null 타입을 정확히 확인하려면, `!NULL && typeof NULL === 'object'` 으로 확인할 수 있다.

<br/>
<br/>

### Function Type

![carbon (12)](https://user-images.githubusercontent.com/49370511/150651924-8debe612-c572-4bd9-8847-92cd84648d99.png)

-   함수는 object의 하위 타입으로, [[call]]로 호출할 수 있는 Callable Object이다.

<br/>
<br/>
<br/>

## undefined / undeclared

<br/>

**undefined** : 접근 가능한 스코프에 변수가 선언되었으나 현재 아무런 값도 `할당되지 않은 상태`
<br/>
**undeclared** : 접근 가능한 스코프에 변수 자체가 `선언조차 되지 않은 상태`

![carbon (13)](https://user-images.githubusercontent.com/49370511/150652636-0f3586b3-8ef6-4192-ba52-1390d5c6f287.png)

-   undeclared는 not declared가 아니라 undefined라고 에러 메세지가 다소 헷갈리게 나온다.

<br/>

### Typeof - `safety guard`

-   typeof 연산자를 사용하면 b가 undeclared임에도 에처러리를 하지 않는다. 이것이 typeof 만의 독특한 안전가드다.
    ![carbon (14)](https://user-images.githubusercontent.com/49370511/150652785-90191dd3-7a76-402b-ba49-7603d1792fca.png)
    ![carbon (17)](https://user-images.githubusercontent.com/49370511/150653021-2aab5035-3ae3-4772-8c83-5f02fd2364e0.png)

    -   `if(window.DEBUG)`와 같은 `winodw 전역 객체`를 활용하는 방식도 있긴 하지만 추천하지 않는다. 다중 자바스크립트 환경 때문.

<br/>

-   Token을 얻어오는 함수
    ![carbon (15)](https://user-images.githubusercontent.com/49370511/150653022-bc92f8c6-2615-4580-92b0-6b7fcb8d4246.png)
    -   window is not available ~ error 해결 방법 ( React에서 서버사이드 렌더링을 할 때 발생하는 문제 )
    -   Node.js는 초기 빌드를 시도할 때 window, documnet와 같은 브라우저 객체를 가지고 있지 않기 때문에 `typeof의 safety guard`로 에러가 나지 않게 도와준다.
