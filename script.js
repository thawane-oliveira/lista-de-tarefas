// 5

const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const cleanButton = document.querySelector('#apaga-tudo');

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

function lineThrough(event) {
  const mimi = event;
  mimi.target.classList.toggle('completed');
}

//

function newListElement() {
  const newTask = document.createElement('li');
  newTask.innerHTML = input.value;
  newTask.classList.add('new-task');
  ol.appendChild(newTask);
  newTask.addEventListener('click', changeBGColor);
  newTask.addEventListener('dblclick', lineThrough);
  input.value = '';
}

button.addEventListener('click', newListElement);

// 10

function cleanList() {
  const list = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < list.length; index += 1) {
    list[index].innerHTML = '';
  }
}

cleanButton.addEventListener('click', cleanList);
