const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');
const totalEl = document.getElementById('total');

let total = 0;

function updateCounter() {
  totalEl.textContent = total;
}

function addTask() {
  const text = input.value.trim();
  if (text === '') {
    return;
  }

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;
  span.className = 'task-text';
  span.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function () {
    li.remove();
    total--;
    updateCounter();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  total++;
  updateCounter();

  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

updateCounter();