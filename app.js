let roll = document.getElementById('roll')
const dice = document.querySelectorAll('.dice')
let rollCount = 3
// console.log(dice)

diceDict = {
    dice1 : {
        value : 0,
        isLocked : false,
    },
    dice2 : {
        value : 0,
        isLocked : false
    },
    dice3 : {
        value : 0,
        isLocked : false
    },
    dice4 : {
        value : 0,
        isLocked : false
    },
    dice5 : {
        value : 0,
        isLocked : false
    },
}
// console.log(diceDict);



function reset() {
    rollCount = 3
}

function saveDice(el) {
    console.log(el)
    if (diceDict[el.id].isLocked) {
        document.getElementById(el.id).style.border = '3px solid black'
        diceDict[el.id].isLocked = false;
    } else {
        document.getElementById(el.id).style.border = '3px solid red'
        diceDict[el.id].isLocked = true;
    }



}

function rollDice() {
    num = Math.floor(Math.random() * 6) + 1
    // if (num == 0) {
    //     num = 1
    // }
    return num;
}

// document.getElementById("dice1").innerHTML = rollDice();
// document.getElementById("dice2").innerHTML = rollDice();
// document.getElementById("dice3").innerHTML = rollDice();
// document.getElementById("dice4").innerHTML = rollDice();
// document.getElementById("dice5").innerHTML = rollDice();

function rollAllDice() {
    console.log('yes')

    if (rollCount >= 0) {
        console.log(rollCount)
        rollCount--

        for (let el in diceDict){
            if(!diceDict[el].isLocked){
                diceDict[el].value = rollDice()
                document.getElementById(el).innerHTML = diceDict[el].value
            }
        };

    } else {
        console.log('You cant roll anymore!')
    }



}

// dice.forEach(el => {
//     console.log(el.innerText)
// });

rollAllDice();
