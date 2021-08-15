var diceValue = document.getElementById("dice-value");
var diceCount1 = 1;
var diceCount2 = 1;

function rollAllDice() {
  rollDice1();
  rollDice2();
}

function rollDice1() {
  const dice = [...document.querySelectorAll("#die-1")];
  dice.forEach((die) => {
    toggleClasses(die);
    diceCount1 = getRandomNumber(1, 6);
    die.dataset.roll = diceCount1;
    setDiceInnerValue(diceCount1 + diceCount2);
  });
}

function rollDice2() {
  const dice = [...document.querySelectorAll("#die-2")];
  dice.forEach((die) => {
    toggleClasses(die);
    diceCount2 = getRandomNumber(1, 6);
    die.dataset.roll = diceCount2;
    setDiceInnerValue(diceCount1 + diceCount2);
  });
}

function setDiceInnerValue(diceCount){
  setTimeout(()=>{
    diceValue.innerHTML = diceCount;
  },3000)
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("roll-button").addEventListener("click", rollAllDice);
