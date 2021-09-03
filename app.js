let roll = document.getElementById('roll')
const dice = document.querySelectorAll('dice')
console.log(dice)
function rollDice() {
    num = Math.floor(Math.random() * 6) + 1
    // if (num == 0) {
    //     num = 1
    // }
    return num;
}

document.getElementById("dice1").innerHTML = rollDice();
document.getElementById("dice2").innerHTML = rollDice();
document.getElementById("dice3").innerHTML = rollDice();
document.getElementById("dice4").innerHTML = rollDice();
document.getElementById("dice5").innerHTML = rollDice();

function rollAllDice() {
    console.log('yes')


    document.getElementById("dice1").innerHTML = rollDice();
    document.getElementById("dice2").innerHTML = rollDice();
    document.getElementById("dice3").innerHTML = rollDice();
    document.getElementById("dice4").innerHTML = rollDice();
    document.getElementById("dice5").innerHTML = rollDice();
}

dice.children.forEach(el => {
    console.log(el)
});
