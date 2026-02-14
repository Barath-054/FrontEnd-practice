// function waiter(order) {
//     console.log("waiter: welcome to the resturant");
//     console.log("waiter: Taking your order...");

//     order();
//     console.log("waiter: order is being prossed and served");
// }

// function orderPizza() {
//     console.log("Customer : I would like  a Pizza");
// }
// function orderPasta() {
//     console.log("Customer: I would like a Pasta ");
// }
// function orderCoffee() {
//     console.log("Customer: I would like a Coffee");
// }

// waiter(orderPasta);
// console.log("___________________________________________________")

// waiter(orderPizza);
// console.log("_________________________________________________")

// waiter(orderCoffee);
// console.log("_________________________________________________________");


function waiter(order) {
    console.log("waiter: welcome to the resturant");
    console.log("waiter: Taking your order...");

    order.forEach(ord => {
        ord();

    });
    console.log("waiter: order is being prossed and served");
    console.log("_________________________________________________")

}


function orderPizza() {
    console.log("Customer : I would like  a Pizza");
}
function orderPasta() {
    console.log("Customer: I would like a Pasta ");
}
function orderCoffee() {
    console.log("Customer: I would like a Coffee");
}

waiter([orderPasta, orderPizza]);

waiter([orderCoffee]);
