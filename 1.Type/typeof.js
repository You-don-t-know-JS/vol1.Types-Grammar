// * check null
console.log(typeof null === 'null'); // false
console.log(typeof null === 'object'); // true
console.log(typeof null); // object

// * truthy, falsy
const NULL = null;
const OBJECT = {};
const UNDEFINED = undefined;
const check = (param) => {
    return param ? 'true' : 'false';
};
check(NULL); // false
check(OBJECT); // true
check(UNDEFINED); // false
console.log(!NULL && typeof NULL === 'object');

// * function type
const FUNCTION = (a, b) => {
    return a + b;
};
typeof FUNCTION; // function
check(FUNCTION); // true
FUNCTION.length;
