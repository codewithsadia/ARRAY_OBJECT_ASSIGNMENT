"use strict";
//***************************************Assignment No 03******************************************* 
//                                 Company Product Catlog
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\n\t===========================  Product ===============================");
///  no 1  array define
let inventory = [];
// no 2  create three product
let product1 = {
    name: "bike",
    model: "honda cdi 2024",
    price: 140000,
    quantity: 10,
};
let product2 = {
    name: "bike",
    model: "super power 2024",
    price: 90000,
    quantity: 15,
};
let product3 = {
    name: "bike",
    model: "Unique 2024",
    price: 95000,
    quantity: 6,
};
inventory.push(product1, product2, product3);
console.log(inventory);
console.log("Quantity of 3rd product is", inventory[2].quantity);
console.log("Price of 1st product is", inventory[0].price);
console.log("Name of 2nd product is", inventory[1].name);
