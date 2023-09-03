
//JS Way chapter 7
/* 
Musketeers

Write a program that:

    Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
    Shows each array element using a for loop.
    Adds the "D'Artagnan" value to the array.
    Shows each array element using the forEach() method.
    Remove poor Aramis.
    Shows each array element using a for-of loop. */


const musketeers = ["Athos", "Porthos", "Aramis"];

for(let e of musketeers) {
    console.log(e);
}

musketeers.push("D'Artagnan")

musketeers.forEach(e => console.log(e));

musketeers.splice(2,1);

for(let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}


/* Sum of values

Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10]; */

const sumArray = () => {
    const newArray = new Array(3,11,7,2,9,10);
    let arrySum = 0;
    for(let e of newArray) {
        arrySum += e;
    }
    return arrySum;
}

console.log(sumArray());


/* Array maximum

Write a program that creates the following array, then calculates and shows the array's maximum value.*/

const values = [3, 11, 7, 2, 9, 10]

function highestValueFromArr() {
    const newArray = [...values];
    let highestValue = 0;

    for(let e of newArray) {
        if (e > highestValue) {
            highestValue = e
        }
    }
    return highestValue
}
console.log(highestValueFromArr());

//or:

function highestValueFromArr22() {
    
    return Math.max(...values)
}
console.log(highestValueFromArr22());


/* List of words

Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop". */


function askQuestionTillStop() {

    let answer = "";
    const userResponses = [];

    do {
     answer = prompt("What is your answer?", "Type your word here").toLocaleLowerCase()
     if(answer !== "stop") {
        userResponses.push(answer)
      }
    } while((answer !== "stop"))

    document.querySelector("#userWords").innerText = userResponses.join(" ")
}

askQuestionTillStop();