var textBox = document.getElementById("text-box");
var dices = document.getElementsByClassName("die-item");
var colorBoxSection = document.getElementById("color-box-id");
var minBox = document.getElementById("quantity1");
var maxBox = document.getElementById("quantity2");
var numberGeneratorBox = document.getElementById("number-generator");

//run only first time when there is no input in textbox
if (textBox.value == "") numberGeneratorBox.style.display = "flex";

//run everytime textbox value changes....
function toggleNumberBox() {
  if (textBox.value) numberGeneratorBox.style.display = "none";
  if (textBox.value == "") numberGeneratorBox.style.display = "flex";
}

function autoGenerateNumbers() {
  if (maxBox.value > 10000) {
    alert(`Max limit 10000`);
  } else if (minBox.value >= 1 && minBox.value <= maxBox.value) {
    let arr = "";
    for (let n = minBox.value; n <= maxBox.value; n++) {
      if (n == maxBox.value) arr = arr + n;
      else arr = arr + n + "\n";
    }
    console.log(arr);
    textBox.value = arr;
    if (textBox.value) numberGeneratorBox.style.display = "none";
  } else {
    alert(`Values should greater than or equal to 1!!!`);
  }
}

function toggleColorBox() {
  if (colorBoxSection.classList.contains("color-box")) {
    colorBoxSection.classList.remove("color-box");
    colorBoxSection.classList.add("color-box-hide");
  } else if (colorBoxSection.classList.contains("color-box-hide")) {
    colorBoxSection.classList.remove("color-box-hide");
    colorBoxSection.classList.add("color-box");
  }
}

var picker = new KellyColorPicker({
  place: "canvas",
  userEvents: {
    change: function (self) {
      // work with your own variables that describe current selected input

      if (!self.selectedInput) return;
      if (self.getCurColorHsv().v < 0.5)
        self.selectedInput.style.color = "#FFF";
      else self.selectedInput.style.color = "#000";

      self.selectedInput.value = self.getCurColorHex();
      self.selectedInput.style.background = self.selectedInput.value;

      textBox.style.backgroundColor = picker.selectedInput.value;

      for (let j = 0; j < dices.length; j++) {
        dices[j].style.backgroundColor = picker.selectedInput.value;
      }
    },
  },
});

picker.editInput = function (target) {
  if (picker.selectedInput) picker.selectedInput.classList.remove("selected");
  if (target) picker.selectedInput = target;
  if (!picker.selectedInput) return false;

  picker.selectedInput.classList.add("selected");
  picker.setColor(picker.selectedInput.value);
};

var mInputs = document.getElementsByClassName("multi-input");
for (var i = 0; i < mInputs.length; i++) {
  picker.editInput(mInputs[i]);
}
