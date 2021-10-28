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
let rollCount = 2
let clickCount = 0
let userChoiceTrue = false
let rollCountDiv = document.getElementById('rollCount')
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
        if (e.target.dataset.isLocked == "false") {
            e.target.dataset.isLocked = true
            e.target.style.border = '3px solid red'
            rollCount = 3
            rollCountDiv.innerText = rollCount
            console.log("Points chosen, starting new round")
            reset();
            rollAllDice();
        }
    })
}


function reset() {
    scoreBoardPoint.forEach(el => {
        if (el.dataset.isLocked == "false") {
            el.innerHTML = 0;
        }
    })
    rollCount = 2
    counts = {}
    dice.forEach(el => {
        el.style.border = '3px solid black'
        diceDict[el.id].isLocked = false;
    })

}

function saveDice(el) {
    // console.log(el)
    if (diceDict[el].isLocked) {
        document.getElementById(el).style.border = '3px solid black'
        diceDict[el].isLocked = false;
    } else {
        document.getElementById(el).style.border = '3px solid #e82734'
        diceDict[el].isLocked = true;
    }




}


function rollDice() {
    num = Math.floor(Math.random() * 6) + 1
    return num;
}



function rollAllDice() {
    // console.log('yes')

    counts = {}
    if (rollCount >= 0) {
        // userChoiceTrue = false
        // console.log(rollCount)
        // clickCount = 1
        // console.log("clickCount:" + clickCount)
        rollCountDiv.innerText = rollCount
        rollCount--


        for (let el in diceDict) {
            if (!diceDict[el].isLocked) {
                diceDict[el].value = rollDice()
            }
            document.getElementById(el).innerHTML = diceDict[el].value
            counts[diceDict[el].value] = counts[diceDict[el].value] ? counts[diceDict[el].value] += diceDict[el].value : diceDict[el].value

        };
        console.log(counts)
        threeOfaKindCheck()

    } else {
        console.log('You cant roll anymore!')
    }
    let i = 0
    scoreBoardPoint.forEach(e => {
        if (e.id in counts) {

            if (e.dataset.isLocked == "false") {
                e.innerHTML = counts[e.id] ? counts[e.id] : 0
            }

        }
        if (e.dataset.isLocked == "true") {
            i++
            console.log(i)
            if (i == 6) {
                console.log("LMFAOOOOOOO")
            }
        }
        if (e.innerHTML != "0" && e.dataset.isLocked == "false") {
            e.style.color = "red"
        } else {
            e.style.color = "black"
        }
    })



}



// console.log(numCounter)
rollAllDice();


function threeOfaKindCheck() {
    // console.log(diceDict)


    sum = 0
    numberPattern = ""
    for (let e in diceDict) {
        numberPattern += diceDict[e].value

        sum += diceDict[e].value

    }
    // console.log(numberPattern)

    numberPattern = numberPattern.split('').sort().join('');

    // console.log(numberPattern.replace(threeOfKindRegex, ''))

    if (threeOfKind.dataset.isLocked == "false" && threeOfKindRegex.test(numberPattern)) {
        threeOfKind.innerHTML = sum
        if (fullhouseRegex.test(numberPattern.replace(threeOfKindRegex, ''))) {
            fullHouse.innerHTML = 25
        } else if (fullHouse.dataset.isLocked == "true") {
            fullHouse.innerHTML = fullHouse.innerHTML
        } else {
            fullHouse.innerHTML = 0
        }
    } else if (threeOfKind.dataset.isLocked == "true") {
        threeOfKind.innerHTML = threeOfKind.innerHTML
    } else {
        threeOfKind.innerHTML = 0
    }
    if (fourOfKind.dataset.isLocked == "false" && fourOfKindRegex.test(numberPattern)) {
        fourOfKind.innerHTML = sum
    } else if (fourOfKind.dataset.isLocked == "true") {
        fourOfKind.innerHTML = fourOfKind.innerHTML
    } else {
        fourOfKind.innerHTML = 0
    }
    if (yahtzeeRegex.test(numberPattern)) {
        yahtzee.innerHTML = 50
    } else if (yahtzee.dataset.isLocked == "true") {
        yahtzee.innerHTML = yahtzee.innerHTML
    } else {
        yahtzee.innerHTML = 0
    }
    if (smallStraight.dataset.isLocked == "false" && smallStraightRegex.test(Array.from(new Set(numberPattern.split(''))).join(''))) {
        smallStraight.innerHTML = 30
    } else if (smallStraight.dataset.isLocked == "true") {
        smallStraight.innerHTML = smallStraight.innerHTML
    } else {
        smallStraight.innerHTML = 0
    }
    if (straightRegex.test(numberPattern)) {
        largeStraight.innerHTML = 40
    } else if (largeStraight.dataset.isLocked == "true") {
        largeStraight.innerHTML = largeStraight.innerHTML
    } else {
        largeStraight.innerHTML = 0
    }
    if (chance.dataset.isLocked == "false") {
        chance.innerHTML = sum
    } else if (chance.dataset.isLocked == "true") {
        chance.innerHTML = chance.innerHTML
    } else {
        chance.innerHTML = 0
    }

}
