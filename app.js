const CALC_DISPLAY = document.querySelector('.calc-display');
const BUTTONS = document.querySelectorAll('button');

let result = 0;
let finalResult = 0;
let userInput = '';


// Fonction d'opération
const operate = function(op, a, b) {
  switch (op) {
    case '+':
      add(a, b);
      return result;
      break;
    case '-':
      subtract(a, b);
      return result;
      break;
    case '*':
      multiply(a, b);
      return result;
      break;
    case '/':
      divide(a, b);
      return result;
      break;
  }
}

// Fonctions de calcul
const add = function(a, b) {
  result = a + b;
}

const subtract = function(a, b) {
  result = a - b;
}

const multiply = function(a, b) {
  return result = a * b;
}

const divide = function(a, b) {
  return result = a / b;
}

// Fonctions d'input et de sélectiond'affichage des entrées et du résultat
for (let i = 0; i < BUTTONS.length; i++) {
  BUTTONS[i].addEventListener('click', function() {
    userInput += (this.textContent);
    updateDisplay();
    console.log(parseInt(userInput));
    }
  )
}

const updateDisplay = function() {
  CALC_DISPLAY.textContent = userInput;
}

//Fonctions de calcul

/*
Si l'input est un chiffre, et que input1 = undefined, enregistrer l'input dans input1. Autrement, enregistrer l'input comme input2.
Si l'input est un operateur, enregistrer dans op.
A chaque fois qu'on appuye sur un bouton operateur ou sur 'égal', exécuter operate().
*/

