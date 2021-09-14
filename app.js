let roll = document.getElementById('roll')
const dice = document.querySelectorAll('.dice')
const scoreBoardPoint = document.querySelectorAll('.scoreboardYou')
const threeOfKind = document.getElementById('threeOf')
const fourOfKind = document.getElementById('fourOf')
const smallStraight = document.getElementById('smallStraight')
const largeStraight = document.getElementById('largeStraight')
const fullHouse = document.getElementById('fullHouse')
const chance = document.getElementById('chance')
const yahtzee = document.getElementById('yahtzee')
let rollCount = 3
let counts = {}
let numCounter = {}
let sum = 0
let numberPattern = ""
const fullhouseRegex = /(\d)\1{1}/
const threeOfAKindRegex = /(\d)\1{2}/
const fourOfAKindRegex = /(\d)\1{3}/
const yahtzeeRegex = /(\d)\1{4}/
const smallStraightRegex = /(1234|2345|3456)/
const straightRegex = /(12345|23456)/
// console.log(smallStraightRegex.test("3412"))
// console.log(scoreBoardPoint)

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
    // console.log('yes')
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
        threeOfaKindCheck()

    } else {
        console.log('You cant roll anymore!')
    }

    scoreBoardPoint.forEach(e => {
        if (e.id in counts) {


            e.innerHTML = counts[e.id] ? counts[e.id] : 0
        }
    })

}

// dice.forEach(el => {
//     console.log(el.innerText)
// });



console.log(numCounter)
rollAllDice();


function threeOfaKindCheck() {
    console.log(diceDict)
    for (let e in diceDict) {

        numberPattern += diceDict[e].value
        console.log(numberPattern)

        sum += diceDict[e].value
        // console.log(sum)
        // numCounter[diceDict[e].value] = numCounter[diceDict[e].value] ? numCounter[diceDict[e].value] + 1 : 1
        // console.log(numCounter)
        // console.log(numCounter[1])
        // if (numCounter[diceDict[e].value] == 3) {
        //     threeOfKind.innerHTML = sum


        // } else if (numCounter[diceDict[e].value] == 4) {
        //     threeOfKind.innerHTML = sum
        //     fourOfKind.innerHTML = sum
        // }
        // // else if (numCounter[diceDict[e].value] == 3 && numCounter[diceDict[e].value]) {

        // // }
        // else {
        //     console.log('no')
        // }

    }

    numberPattern = numberPattern.split('').sort().join('');

    console.log(numberPattern.replace(threeOfAKindRegex, ''))
    if (threeOfAKindRegex.test(numberPattern)) {
        threeOfKind.innerHTML = sum
        if (fullhouseRegex.test(numberPattern.replace(threeOfAKindRegex, ''))) {
            fullHouse.innerHTML = 25
        }
    }
    if (fourOfAKindRegex.test(numberPattern)) {
        fourOfKind.innerHTML = sum
    }
    if (yahtzeeRegex.test(numberPattern)) {
        yahtzee.innerHTML = 50
    }
    if (smallStraightRegex.test(numberPattern)) {
        smallStraight.innerHTML = 30
    }
    if (straightRegex.test(numberPattern)) {
        largeStraight.innerHTML = 40
    }

    chance.innerHTML = sum

}
