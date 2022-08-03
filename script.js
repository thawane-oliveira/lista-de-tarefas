// 5

const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');

function newListElement() {
  const newTask = document.createElement('li');
  newTask.innerHTML = input.value;
  newTask.classList.add('new-task');
  ol.appendChild(newTask);
  newTask.addEventListener('click', changeBGColor);
  input.value = '';
}

button.addEventListener('click', newListElement);

// 7

const selectedTask = document.getElementsByClassName('new-task')

function changeBGColor(event) {
  console.log('tarefa nova', event.target);
  for (let index = 0; index < selectedTask.length; index += 1) {
    selectedTask[index].classList.remove('new-task');
  }
  event.target.classList.add('selected');
  event.target.style.backgroundColor = 'gray';
}

