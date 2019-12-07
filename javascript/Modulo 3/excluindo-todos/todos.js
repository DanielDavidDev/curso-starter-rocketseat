var ulElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
  'Fazer café ',
  'Estudar Javascript ',
  'Acessar comunidade da Rocketseat '
]

function renderTodos() {
  ulElement.innerHTML = '';
  
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', `deleteTodo(${pos})`)

    var linkTextElement = document.createTextNode('Excluir');
    linkElement.appendChild(linkTextElement);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    ulElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
}