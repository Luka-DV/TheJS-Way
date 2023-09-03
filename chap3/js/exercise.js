
//chapter 3

/* Number comparison

Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases. */

function compareNumbers() {

    let number1 = Number(prompt("Number 1"));
    let number2 = Number(prompt("Number 2"));

    if(number1 > number2) console.log("Num1 is greater than num2")
    else if(number2 > number1) console.log(("Num2 is greater than num1"))
    else console.log("The numbers are equal");
}

//compareNumbers()

/* Number of days in a month

Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account. */

function checkNumOfDaysInMonth() {

    let month = prompt("Which month is it?","Enter month").toLowerCase();

    switch(month) {
        case "january":
            console.log("January has 31 days!");
            break;
        case "february":
            console.log("February has either 28 or 29 days.");
            break;
        default: 
            console.log("WHateva");
    }
}

//checkNumOfDaysInMonth()