const numberInput = document.getElementById('numberInput');
const message = document.getElementById('message');

numberInput.addEventListener('input', handleNumberInput);

function handleNumberInput() {
  const value = parseInt(numberInput.value);

  if (isNaN(value)) {
    message.textContent = 'Please enter a valid number.';
    return;
  }

  if (value < 0) {
    message.textContent = 'Please enter a positive value.';
    return;
  }

  message.textContent = '';

  if (value % 2 === 0) {
    displayNextEvenNumbers(value);
  } else {
    displayNextOddNumbers(value);
  }
}

function displayNextEvenNumbers(number) {
  const nextEvenNumbers = [number + 2, number + 4, number + 6];
  message.textContent = nextEvenNumbers.join(', ');
}

function displayNextOddNumbers(number) {
  const nextOddNumbers = [number + 2, number + 4, number + 6];
  message.textContent = nextOddNumbers.join(', ');
}
