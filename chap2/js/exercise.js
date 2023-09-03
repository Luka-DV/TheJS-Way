
//chapter 2

/* Improved hello

Write a program that asks the user for his first name and his last name. The program then displays them in one sentence. */

function sayHello(name, surname) {
    name = prompt("Please input your name", "");
    surname = prompt("What is your surname?");
    alert(`Hello ${name} ${surname}!`);
}

//sayHello()


/* VAT calculation

Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%. */

function calculateRetailPrice(rawPrice, vatPrice) {
    rawPrice = Number(prompt("enter raw price"));
    vatPrice = rawPrice + (rawPrice * 20.6)/100
    alert(vatPrice);
}

//calculateRetailPrice()

