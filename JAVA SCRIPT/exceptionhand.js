// try
// {
//     console.log("program starts");
//     abc();
//     console.log("Program ends");
// }
// catch(e) {
//     console.log(e.message);
// }
// finally {
//     console.log("Program closed");
// }  

// let a = 10/0;
// console.log(a);

function validation(age) {
    if (age < 18) {
        throw new Error("Under Aged.");
    } else {
        console.log("valid Age.");
    }
}
try {
    validation(16);
}
catch(e) {
    console.log("Error is : " , e.message);
}