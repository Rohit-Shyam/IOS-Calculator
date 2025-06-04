const display = document.getElementById('display');

const appendToDisplay = (input) => {
  if (input === '+/-') {
    display.value = eval(display.value) * -1;
  } else if (input === '%') {
    display.value = eval(display.value) / 100;
  } else {
    display.value += input;
  }
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
};

const clearDisplay = () => {
  display.value = '';
};
