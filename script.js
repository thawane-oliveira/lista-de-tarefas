// 5

const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const cleanButton = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const upButton = document.querySelector('#mover-cima');
const downButton = document.querySelector('#mover-baixo');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');

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
  localStorage.setItem('tasks', ol.innerHTML);
}

saveButton.addEventListener('click', saveTasks);

//

function upTask() {
  for (let index = 0; index < ol.children.length; index += 1) {
    if (ol.children[index].classList.contains('selected')) {
      ol.children[index]
    }
  }
}
// previousSibling, nextSibling, se ja for firstchild n pode e down se for lastchild n pode;

upButton.addEventListener('click', upTask);

//

function downTask() {

}

downButton.addEventListener('click', downTask);

//

function removeSelected() {
  const selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].remove();
  }
}

buttonRemoveSelected.addEventListener('click', removeSelected);
