let col = new Array("red", "blue");
console.log(col);

col.push("black");
console.log(col);

col.unshift("yellow");
console.log(col);

col.pop();
console.log(col);

col.shift();
console.log(col);

col.unshift("yellow");
console.log(col);
col.push("black");
console.log(col);


col.splice(1, 2);
console.log(col);

col.unshift("roman");
col.push("dug");
console.log(col);
//splice(startindex, lengthofdeleting, addnew , addnew);
col.splice(1, 2, "rupe", "usa");
console.log(col);//[ 'roman', 'rupe', 'usa', 'dug' ]

console.log(col.slice(4, 1));
console.log(col);

let fruits = ["mango", "apple", "cherry", "jackfruit", "orange"];
console.log(fruits.sort());
console.log(fruits.indexOf("jackfruit"));

console.log(fruits.reverse());

fruits.forEach( f => console.log(f));

let number = [1, 2, 3];
number.forEach( n => console.log(n * n));

let num = [1, 2, 3];
let sqr = num.map( n => n * n);
console.log(num);
console.log(sqr);

let no = [1, 2, 3];
let sum = 0;
let add = no.map( n => sum += n);
console.log(add);


let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = n.filter(eve => eve % 2 === 0);
console.log(even);
console.log(n);

let a = [1, 2, 3, 4];
let b = a.reduce((sum, num) => sum + num, 0);
console.log(b);
console.log(a);

let c = a.reduce((e, f) => e * f, 1);
console.log(c);

let g = [1, 2];
let h = [4, 5];
let com = g.concat(h);
console.log(com);

let jo = ["hello", "World"];
let res = jo.join(" ");
console.log(res);



let hg = ["orange", "apple", "cherry", "jackfruit"];


let n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(n1.indexOf(0));
console.log(n1.includes(0));

let arr = [1,2,3,4,5,6,7]
arr.forEach(arrs=>console.log(arrs,end=" "))