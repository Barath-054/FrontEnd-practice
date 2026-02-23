// async function bookTickets() {
//     await new Promise((resolve) => {
//         setTimeout(resolve,2000)
//     });
//     console.log("Open BMS.");

//     await new Promise ((resolve) => setTimeout(resolve, 3000));
//     console.log("Select the Movie.");

//     await new Promise ((resolve) => setTimeout(resolve, 5000));
//     console.log("Select Seats.");

//     await new Promise ((resolve) => setTimeout(resolve, 1000));
//     console.log("Tickets Booked.");
// }

// bookTickets();


// function wait(ms) {
//     return new Promise ((resolve) => setTimeout(resolve, ms));
// }

// async function bookTickets() {
//     await wait(2000);
//     console.log("Open BMS.");

//     await wait(3000);
//     console.log("Select the Movie.");

//     await wait(5000);
//     console.log("Select Seats.");

//     await wait(1000);
//     console.log("Tickets Booked.");
// }

// bookTickets();




function wait(ms) {
    return new Promise ((resolve) => setTimeout(resolve, ms));
}


 function bookTickets() {
    return new Promise(async (resolve, reject) => {
        let app = "BMS";
        if (app === "BMS") {
        await wait(2000);
        console.log("Open BMS.");

        await wait(3000);
        console.log("Select the Movie.");

        await wait(5000);
        console.log("Select Seats.");

        await wait(1000);
        console.log("Tickets Booked.");
        } else {
            reject(new Error("Not Found."));
        }
   });
 }

bookTickets()

.then((msg) => console.log(msg))
.catch((e) => console.log(e.message));
