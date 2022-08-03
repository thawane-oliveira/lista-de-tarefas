// 5

const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');

function changeBGColor(event) {
  const newTask = document.querySelectorAll('.new-task');
  for (let index = 0; index < newTask.length; index += 1) {
    newTask[index].classList.remove('new-task');
  }
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.classList.remove('selected');
  }
  const evt = event;
  evt.target.classList.add('selected');
}

function newListElement() {
  const newTask = document.createElement('li');
  newTask.innerHTML = input.value;
  newTask.classList.add('new-task');
  ol.appendChild(newTask);
  newTask.addEventListener('click', changeBGColor);
  input.value = '';
}

button.addEventListener('click', newListElement);

// 9


