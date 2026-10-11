let count = 0;

const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

function render() {
  countEl.textContent = count;
  if (count > 0) {
    countEl.style.color = 'green';
  } else if (count < 0) {
    countEl.style.color = 'red';
  } else {
    countEl.style.color = '';
  }
}

function increment() {
  count++;
  render();
}

function decrement() {
  count--;
  render();
}

function reset() {
  count = 0;
  render();
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

render();