let roll = document.getElementById('roll')
const dice = document.querySelectorAll('.dice')
const scoreBoardPoint = document.querySelectorAll('.scoreboardYou')
let rollCount = 3
let counts = {}
console.log(scoreBoardPoint)

let diceDict = {
    dice1: {
        value: 0,
        isLocked: false,
    },
    dice2: {
        value: 0,
        isLocked: false
    },
    dice3: {
        value: 0,
        isLocked: false
    },
    dice4: {
        value: 0,
        isLocked: false
    },
    dice5: {
        value: 0,
        isLocked: false
    },
}
// console.log(diceDict);



function reset() {
    rollCount = 3
    counts = {}
    dice.forEach(el => {
        el.style.border = '3px solid black'
        diceDict[el.id].isLocked = false;
    })
}

function saveDice(el) {
    console.log(el)
    if (diceDict[el].isLocked) {
        document.getElementById(el).style.border = '3px solid black'
        diceDict[el].isLocked = false;
    } else {
        document.getElementById(el).style.border = '3px solid red'
        diceDict[el].isLocked = true;
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
    counts = {}
    if (rollCount >= 0) {
        console.log(rollCount)
        rollCount--

        for (let el in diceDict) {
            if (!diceDict[el].isLocked) {

                diceDict[el].value = rollDice()
                document.getElementById(el).innerHTML = diceDict[el].value
                counts[diceDict[el].value] = counts[diceDict[el].value] ? counts[diceDict[el].value] += diceDict[el].value : diceDict[el].value


                // console.log(counts)
            }
        };


    } else {
        console.log('You cant roll anymore!')
    }

    scoreBoardPoint.forEach(e => {
        if (e.id in counts) {
            console.log(e)

            e.innerHTML = counts[e.id] ? counts[e.id] : 0
        }
    })

}

// dice.forEach(el => {
//     console.log(el.innerText)
// });

rollAllDice();


