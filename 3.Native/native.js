/* Native 예제코드 */

    //네이티브는 생성자처럼 사용할 수 있다. 과연 생성되는 결과물도 내 예상처럼 나올까?
    let s = new String('Hello World!')

    // s를 그대로 찍어보면?
    console.log(s) // [String: 'Hello World!']
    console.log(typeof s) // Object
    console.log(Object.prototype.toString.call(s)) // [object String]

    console.log(s.toString()) // Hello World!


    // console.log(s)의 실행결과는 브라우저마다 다르다. 브라우저 개발자가 임의로 정했기 때문이다. 
    // TODO :: 요지는 new String('abc')는 'abc'를 감싸는 문자열래퍼를 생성함. 즉 원시값'abc'와는 다르다는 것이다!


/* 3.1 내부[[Class]] */
    //Object.prototype.toString() 메서드로 내부 프로퍼티의 type 알아보기

    Object.prototype.toString.call([1,2,3])//[object Array]
    Object.prototype.toString.call(/regex-literal/i)//[object RegExp]
    
    //네이티브 생성자 메소드는 없지만 아래와 같이 결과가 나옴
    Object.prototype.toString.call(null)// [object Null]
    Object.prototype.toString.call(undefined)//[object Undefined]

    Object.prototype.toString.call('abc')// [object String]
    Object.prototype.toString.call(42)// [object Number]
    Object.prototype.toString.call(true)// [object Boolean]


/* 3.2 래퍼 박싱하기 */
    let a = 'abc'
    a.length
    a.toUpperCase()

/* 3.2.1 객체 래퍼의 함정 */
    let b = new Boolean(false) // false를 객체래퍼로 감싸면 객체이므로 truthy
    if(!b){ console.log('doing')} // 실행되지 않는다


/* 3.3 언박싱 */
    let c = new String('abc') // [String: 'abc']
    let d = new Number(42) // [Number: 42]
    let e = new Boolean(true) // [Boolean: true]

    // 객체래퍼의 원시값은 valueOf() 메서드로 추출한다.
    c.valueOf() // 'abc'
    d.valueOf() // 42
    e.valueOf() // true

    let f = new String('abc')
    let g = f + '' //f에는 언박싱된 원시값 'abc'가 대입된다.
    console.log(f, typeof f) // [String:'abc'] object
    console.log(g, typeof g) // abc string

/* 3.4 네이티브, 나는 생성자다 */
    //3.4.1. Array()
    let h = new Array(3)
    let i = [undefined,undefined,undefined] 
    let j = [] 
    j.length = 3

    console.log(h,i,j) 
    //[ <3 empty items> ] [ undefined, undefined, undefined ] [ <3 empty items> ]

    i.join('-') //[-,-,-]
    i.map((v,el)=>{return el})
    console.log(i)

    //3.4.2. Object(), Function(), RegExp()
    //객체 - 두방식의 결과는 같음

    let k = new Object()
    k.foo = "bar"

    let kk = {foo:"bar"}


    //함수
    let l = new Function("n", "return n*2")
    let m = function(n){return n*2}
    function o(n){return n*2}

    //정규표현식
    let name = "Kyle"
    let namePattern = new RegExp("\\b(?:"+ name + ")+\\b", "ig");

    //3.4.3. Date(), Error()
    //날짜객체
    if(!Date.now){
        Date.now = function(){
            return (new Date()).getTime();
        }
    }

    //에러
    function foo(x){
        if(!x){
            throw new Error("x를 안 주셨어요!")
        }
    }

    //3.4.4. Symbol()
    

