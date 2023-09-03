
//chapter 4

/* Carousel

Write a program that launches a carousel for 10 turns, showing the turn number each time.

When it's done, improve it so that the number of turns is given by the user. */


function carousel() {

    let numberOfTurns = Number(prompt("Num of turns",""))

    for(let i = 1; i <= numberOfTurns; i++) {
        if(i % 2 === 0) {
            console.log(`${i} is an even number`);
        } else if (i % 2 === 1) {
            console.log(`${i} is an odd number`);
        } else console.log("This is unreal");
    }
}

carousel();