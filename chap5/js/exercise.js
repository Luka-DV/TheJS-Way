
//chapter 5


function sayHello(firstName, lastName) {
    firstName = prompt("First name?");
    lastName = prompt("Last name?");
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}

//alert(sayHello());


function square1() {
    for( let i = 0; i <= 10; i++) {
        let x = i;
        const square = x * x;
        console.log(square);
    }
}

const square2 = x => {
    for( let i = 0; i <= 10; i++) {
        x = i;
        const square = x * x;
        console.log(square);
    }
}


//square1(), square2()



function min(num1, num2) {
    if (num1 < num2) return num1
    else if (num2 < num1) return num2
    else return num1
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1



function calculate(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

/* 
Circumference and area of a circle

Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

Here are some tips for solving this exercise:

    Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
    The value of number π (Pi) is obtained with Math.PI in JavaScript.
    You might want to use the exponentiation operator ** to perform computations.

console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3


area of circle = πr2
circumference = 2πr

π === Math.PI
 */

document.querySelector("#btn").addEventListener("click", function(){
    calculateArea();
    calculateCirc();
})

function calculateArea(r) {
    r =  Number(document.querySelector("#input").value);
    let result = (Math.PI*(r**2)).toFixed(3);
    document.querySelector("#circleArea").innerHTML = `The circle area is <span style="color: red">${result}</span> square cm big.`;
}

function calculateCirc(r) {
    r =  Number(document.querySelector("#input").value);
    let result = (2*Math.PI*r).toFixed(3);
    document.querySelector("#circleCirc").innerHTML = `The circumference of the circle is <span style="color: blue;">${result}</span> cm.`
}