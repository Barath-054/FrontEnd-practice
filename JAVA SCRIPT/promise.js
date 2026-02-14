// p = new Promise((resolve, reject) =>{
//     let app = "kodnest";
//     if (app === "kodnest") {
//         resolve();
//     } else {
//         reject( new Error("Not Found"));
//     }
// })

// p.then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Open BMS");
//             resolve();
//         }, 2000);  
//     });
// })
// .then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("select Movies");
//             resolve();
//         }, 3000);  
//     });
// })
// .then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("select seat.");
//             resolve();
//         }, 5000);  
//     });
// })
// .then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("book the tickets.");

//             resolve();
//         }, 1000);  
//     });
// })
// .catch((e) => {
//     console.log("Error " , e.message);
// });


let p = new Promise((resolve, reject) => {
    let app = "Kodnest"
    if (app === "Kodnest") {
        resolve("Application is found")
    } else {
        reject(new Error("Application is not found"))
    }
})

p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Open BMS");
            resolve();
        }, 2000);  
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("select Movies");
            resolve();
        }, 3000);  
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("select seat.");
            resolve();
        }, 5000);  
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("book the tickets.");

            resolve();
        }, 1000);  
    });
})
.catch((e) => {
    console.log("Error " , e.message);
});