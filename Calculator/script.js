let result = document.getElementById("result");

function backspace() {
  let result = document.getElementById("result");
  let currentInput = result.value;
  // Remove the last character
  result.value = currentInput.slice(0, -1);
}

function display(value) {
  result.value += value;
}

function clearScreen() {
  result.value = "";
}

function calculate() {
  let exp = result.value;
  let answer = eval(exp);
  result.value = answer;
}
