function add(a, b) {
    console.log(a+b);
}

function sub(a, b) {
    return a-b;
}

function mul() {
    return 8 / 16;
}

add(12, 20);
console.log(sub(12, 20));
console.log(mul());



console.log(ret());// function hoisiting ***
//function declaration/creation/ definition
function ret(name, age) {
    return `hello,, hi iam  ${name} i am ${age} old `;
}


//function Expression
let host = function (name, age) {
    return `hello,, hi iam  ${name} i am ${age} old `;
}
console.log(host());// not function hoisiting ***

//Arrow function
let arr = num => num * num // not a function hoisting
console.log(arr(5));


var abc = 10;
var abc =20;
console.log(abc);

function value() {
    console.log(abc);
}

value();

function outer() {
    let name = "JavaScript";

    function middle() {  
        function inner() {
            console.log(name);
        }
        inner();
    }
    middle();
}

outer();


let a = [1,2,3,4,5,6];
let sum = 0;
let b = a.map(n1 => sum += n1); // map
console.log(b);

a.forEach(ba => {
    console.log(ba , end="");
});

let even = a.filter(num => num %2== 0);
console.log(even);

let num = a.reduce((acc, num) => acc + num, 0);
console.log(num);