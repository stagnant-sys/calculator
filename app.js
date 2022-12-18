const CALC_DISPLAY = document.querySelector('.calc-display');
const NUMBERS_BUTTONS = document.querySelectorAll('.number-btn');
const OPERATORS_BUTTONS = document.querySelectorAll('.operator-btn');

let tempResult = 0;
let finalResult = 0;
let userInput = '';
let op;
let a;
let b;


// Fonction d'opération
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

// Fonctions de calcul
const add = function(a, b) {
  tempResult = a + b;
}

const subtract = function(a, b) {
  result = a - b;
}

const multiply = function(a, b) {
  tempResult = a * b;
}

const divide = function(a, b) {
  tempResult = a / b;
}

// Fonctions d'input et de sélectiond'affichage des entrées et du résultat
const getNumberInputs = function() {
  userInput += (this.textContent);
  updateDisplay();
}

const getOperator = function() {
  if (!a) {
    a = parseInt(userInput);
    op = this.textContent;
    userInput += (this.textContent);
    updateDisplay();
  } else {
    CALC_DISPLAY.textContent = ' ';
    b = parseInt(userInput);
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



//Fonctions de calcul

/*
Si l'input est un chiffre, et que input1 = undefined, enregistrer l'input dans input1. Autrement, enregistrer l'input comme input2.
Si l'input est un operateur, enregistrer dans op.
A chaque fois qu'on appuye sur un bouton operateur ou sur 'égal', exécuter operate().
*/

