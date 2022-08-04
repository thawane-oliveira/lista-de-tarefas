// 5

const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const cleanButton = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');

window.onload = () => {
  const recoveredTasks = localStorage.getItem('tasks');
  if (recoveredTasks) {
    ol.innerHTML = recoveredTasks;
  }
};

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

//

function cleanList() {
  const list = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < list.length; index += 1) {
    list[index].innerText = '';
  }
}

cleanButton.addEventListener('click', cleanList);

//

function cleanFinished() {
  const alreadyFinished = document.querySelectorAll('.completed');
  for (let index = 0; index < alreadyFinished.length; index += 1) {
    alreadyFinished[index].remove();
  }
}

buttonRemoveFinished.addEventListener('click', cleanFinished);

//

function saveTasks() {
  // const tasks = document.querySelectorAll('#lista-tarefas');
  localStorage.setItem('tasks', ol.innerHTML);
}

saveButton.addEventListener('click', saveTasks);
