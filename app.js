let roll = document.getElementById('roll')
const dice = document.querySelectorAll('.dice')
const scoreBoardPoint = document.querySelectorAll('.scoreboardYou')
let threeOfKind = document.getElementById('threeOf')
let fourOfKind = document.getElementById('fourOf')
let smallStraight = document.getElementById('smallStraight')
let largeStraight = document.getElementById('largeStraight')
let fullHouse = document.getElementById('fullHouse')
let chance = document.getElementById('chance')
let yahtzee = document.getElementById('yahtzee')
let rollCount = 3
let counts = {}
let numCounter = {}
let sum = 0
let numberPattern = ""
const fullhouseRegex = /(\d)\1{1}/
const threeOfKindRegex = /(\d)\1{2}/
const fourOfKindRegex = /(\d)\1{3}/
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



for (let i = 0; i < scoreBoardPoint.length; i++) {
    scoreBoardPoint[i].addEventListener("click", e => {
        e.target.dataset.isLocked = true
        e.target.style.border = '3px solid red'
    })
}


function reset() {
    rollCount = 30
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

function saveTableScore(id) {
    console.log("lol")
}

function rollDice() {
    num = Math.floor(Math.random() * 6) + 1
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



console.log(numCounter)
rollAllDice();


function threeOfaKindCheck() {
    console.log(diceDict)
    // threeOfKind.innerHTML = 0
    // fourOfKind.innerHTML = 0
    // yahtzee.innerHTML = 0
    // fullHouse.innerHTML = 0
    // smallStraight.innerHTML = 0
    // largeStraight.innerHTML = 0

    sum = 0
    numberPattern = ""
    for (let e in diceDict) {
        numberPattern += diceDict[e].value
        console.log(numberPattern)

        sum += diceDict[e].value
        console.log(sum)
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

    console.log(numberPattern.replace(threeOfKindRegex, ''))

    if (threeOfKindRegex.test(numberPattern)) {
        console.log(threeOfKindRegex.test(numberPattern))

        threeOfKind.innerHTML = sum
        if (fullhouseRegex.test(numberPattern.replace(threeOfKindRegex, ''))) {
            fullHouse.innerHTML = 25
        } else if (fullHouse.dataset.isLocked == "true") {
            fullHouse.innerHTML = fullHouse.innerHTML
        }
    } else if (threeOfKind.dataset.isLocked == "true") {
        threeOfKind.innerHTML = threeOfKind.innerHTML
    }
    if (fourOfKind.dataset.isLocked == "false" && fourOfKindRegex.test(numberPattern)) {
        fourOfKind.innerHTML = sum
    } else if (fourOfKind.dataset.isLocked == "true") {
        fourOfKind.innerHTML = fourOfKind.innerHTML
    }
    if (yahtzeeRegex.test(numberPattern)) {
        yahtzee.innerHTML = 50
    } else if (yahtzee.dataset.isLocked == "true") {
        yahtzee.innerHTML = yahtzee.innerHTML
    }
    if (smallStraight.dataset.isLocked == "false", smallStraightRegex.test(numberPattern)) {
        smallStraight.innerHTML = 30
    } else if (smallStraight.dataset.isLocked == "true") {
        smallStraight.innerHTML = smallStraight.innerHTML
    }
    if (straightRegex.test(numberPattern)) {
        largeStraight.innerHTML = 40
    } else if (largeStraight.dataset.isLocked == "true") {
        largeStraight.innerHTML = largeStraight.innerHTML
    }
    if (chance.dataset.isLocked == "false") {
        chance.innerHTML = sum
    } else if (chance.dataset.isLocked == "true") {
        chance.innerHTML = chance.innerHTML
    }

}
