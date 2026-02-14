


console.log("D :",d);
var d;// declaration part will be move to the top;
d = 10;

console.log("A : ",a);
var a = 10; 


// let b;
//  console.log(b,c); // cannot be hoisting
//  let c;

// console.log(b);// error
// let b;

// console.log(c);
// const c = 2;


// function Overloading using spread operator

function add(...args) {
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    console.log(sum);
}

add();
add(10, 20);
add(10,10,20, 30);