var a = 10;
var a = 0/0;
console.log(a);//NaN

var a = 25;
a = 89/0;
console.log(a);//infinity;

let b = 27;
//let b = 32; we cant re declare the same variable;
console.log(b);

const pi = 3.14;
console.log(pi);   

var s;
console.log(s);//undefined

var a = 57.89;
console.log(typeof a); //number type;

var x = 3;
a = x++;
document.writeln('<h2 contenteditable="yes"> Hello </h2>');//3
console.log(x);//4

console.log(a == x);//false;

let r = 5;
let f = "5";
console.log(r === f);
var g = 5;
console.log((g % 2 == 0)? "even" : "odd");

