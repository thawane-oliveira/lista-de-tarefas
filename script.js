// 5

const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');

function newListElement() {
    const newTask = document.createElement('li');
    newTask.innerHTML = input.value;
    ol.appendChild(newTask);
    input.value = ''; 
} 

button.addEventListener('click', newListElement);

