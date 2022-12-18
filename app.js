const CALC_DISPLAY = document.querySelector('.calc-display');
const NUMBERS_BUTTONS = document.querySelectorAll('.number-btn');
const OPERATORS_BUTTONS = document.querySelectorAll('.operator-btn');
const EQUAL_BUTTON = document.querySelector('.result-btn');
const CLEAR_BUTTON = document.querySelector('.clear-btn');
const CLEAR_ALL_BUTTON = document.querySelector('.clear-all-btn');

let tempResult = 0;
let finalResult = 0;
let userInput = '';
let op;
let a;
let b;


// Fonctions d'opération
const operate = function(op, a, b) {
  switch (op) {
    case '+':
      add(a, b);
      return tempResult;
      break;
    case '-':
      subtract(a, b);
      return tempResult;
      break;
    case '*':
      multiply(a, b);
      return tempResult;
      break;
    case '/':
      divide(a, b);
      return tempResult;
      break;
  }
}

const add = function(a, b) {
  tempResult = a + b;
}

const subtract = function(a, b) {
  tempResult = a - b;
}

const multiply = function(a, b) {
  tempResult = a * b;
}

const divide = function(a, b) {
  tempResult = a / b;
}

// Fonctions d'input et de sélection d'affichage des entrées et du résultat
const getResult = function() {
  a = +userInput.split(/[+-/*]/)[0];
  b = +userInput.split(/[+-/*]/)[1];
  operate(op, a, b);
  userInput = tempResult.toString();
  op = undefined;
  updateDisplay();
}

const getNumberInputs = function() {
  userInput += (this.textContent);
  updateDisplay();
}

const getOperator = function() {
  if (!op) {
    op = this.textContent;
    userInput += ` ${(this.textContent)} `;
    updateDisplay();
  } else {
    getResult();
    op = this.textContent;
    userInput += ` ${(this.textContent)} `;
    updateDisplay();
  }
}

const updateDisplay = function() {
  CALC_DISPLAY.textContent = userInput;
}

for (let i = 0; i < NUMBERS_BUTTONS.length; i++) {
  NUMBERS_BUTTONS[i].addEventListener('click', getNumberInputs)
}

for (let i = 0; i < OPERATORS_BUTTONS.length; i++) {
  OPERATORS_BUTTONS[i].addEventListener('click', getOperator)
}

EQUAL_BUTTON.addEventListener('click', getResult);
CLEAR_BUTTON.addEventListener('click', function() {
  userInput = userInput.slice(0, -1);
  updateDisplay();
})

CLEAR_ALL_BUTTON.addEventListener('click', function() {
  userInput = '';
  op = undefined;
  updateDisplay();
})