console.log("Hi");
console.log("hello");// syncro
console.log("hou are you");


setTimeout(() => { // Asyncro
    console.log("Hi");
    setTimeout(() => {
        console.log("Hello");
        setTimeout(() => {
            console.log("How are you");
        },1111);
    }, 1111);
}, 1111);