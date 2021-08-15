var counter = 0;
var textBox = document.getElementById("text-box");
var counterBox = document.getElementById("counter-value");
var timeBox = document.getElementById("time-value");
var numberGeneratorBox = document.getElementById("number-generator");


if (counter === 0) {
  counterBox.innerHTML = counter;
  setTime();
}

//return current time

function getTimeStamp(){
  var dateNow = new Date();
  return(
    dateNow.toLocaleString() + " " + (Intl.DateTimeFormat().resolvedOptions().timeZone)
  )
}

// function getTimeStamp() {
//   var now = new Date();
//   return (
//     now.getMonth() +
//     1 +
//     "/" +
//     now.getDate() +
//     "/" +
//     now.getFullYear() +
//     " " +
//     now.toLocaleTimeString() + " "
//     // now.getHours() +
//     // ":" +
//     // (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) +
//     // ":" +
//     // (now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds()) + " "
//     + (Intl.DateTimeFormat().resolvedOptions().timeZone)
//   );
// }

function setTime() {
  timeBox.innerHTML = getTimeStamp();
}

function resetValue() {
  counter = 0;
  counterBox.innerHTML = counter;
  textBox.value = "";
  numberGeneratorBox.style.display = "flex"
}

//main function to randmize the strings..
function randomize() {
  var text = textBox.value.split("\n");
  var shuffledArray = text
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("\n");

  textBox.value = shuffledArray;
  counter = counter + 1;
  counterBox.innerHTML = counter;
  setTime();
}
