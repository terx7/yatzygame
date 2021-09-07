let roll = document.getElementById('roll')
const dice = document.querySelectorAll('.dice')
let rollCount = 3
console.log(dice)




function reset() {
    rollCount = 3
}

function saveDice(el) {
    if (el.getAttribute('isMarked')) {
        el.style.border = '3px solid black'
        el.removeAttribute('isMarked')
    } else {
        el.style.border = '3px solid red'
        el.setAttribute('isMarked', true)
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

        dice.forEach(el => {
            console.log(el.innerHTML)
            if(!el.getAttribute('isMarked')){
                el.innerHTML = rollDice()
            }
        });

    } else {
        console.log('You cant roll anymore!')
    }



}

// dice.forEach(el => {
//     console.log(el.innerText)
// });

rollAllDice();
