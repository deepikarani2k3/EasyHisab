const display = document.getElementById('display');

function appendValue(value) {
  if (value === '^') {
    display.value += '**'; // exponentiation
  } else if (value === 'pi') {
    display.value += 'Math.PI';
  } else if (value === 'e') {
    display.value += 'Math.E';
  } else if (value === 'sqrt(') {
    display.value += 'Math.sqrt(';
  } else if (value === 'log(') {
    display.value += 'Math.log10(';
  } else if (value === 'ln(') {
    display.value += 'Math.log(';
  } else if (value === 'sin(' || value === 'cos(' || value === 'tan(') {
   

    const func = value.slice(0, 3); // sin, cos, tan
    display.value += `Math.${func}(toRadians(`;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const result = eval(display.value + ')'.repeat(openParensBalance(display.value)));
    display.value = result;
  } catch (err) {
    display.value = 'Error';
  }
}

// to close all unclosed brackets
function openParensBalance(expr) {
  let open = 0, close = 0;
  for (let char of expr) {
    if (char === '(') open++;
    else if (char === ')') close++;
  }
  return Math.max(0, open - close);
}


function toRadians(deg) {//rad conv
  return deg * (Math.PI / 180);
}
