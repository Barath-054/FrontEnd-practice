function outer() {
    let count = 0;
   return function inner() {
    console.log("count value is: ", count);
    count++;
   }
}

let res = outer();
res();
res();  // output:
res();   // count value is:  0
//         count value is:  1
//         count value is:  2