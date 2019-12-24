var containerElement = document.querySelector('.container');
var inputElement = document.createElement('input');

var ulElement = document.createElement('ul');
ulElement.className = 'repoList';
var listItem = document.createElement('li');
listItem.textContent = 'Carregando...';
var listError = document.createElement('li');
listError.className = 'list-item';
listError.textContent = 'Usuário não encontrado!';

var btnElement = document.createElement('button');
btnElement.innerHTML = 'adicionar';

btnElement.onclick = function() {
  removeAllChildren().then(function() {
    ulElement.appendChild(listItem);
    axios
      .get(`https://api.github.com/users/${inputElement.value}/repos`)
      .then(function(response) {
        ulElement.removeChild(listItem);
        for (var repo of response.data) {
          var repoElement = document.createElement('li');
          repoElement.textContent = repo.name;
          repoElement.className = 'list-item';
          ulElement.appendChild(repoElement);
        }
      })
      .catch(function(error) {
        ulElement.removeChild(listItem);
        ulElement.appendChild(listError);
      });
  });
};

function removeAllChildren() {
  return new Promise(function(response) {
    var ProjectsItems = document.querySelectorAll('.list-item');
    for (var ProjectsItem of ProjectsItems) {
      ulElement.removeChild(ProjectsItem);
    }
    response();
  });
}

containerElement.appendChild(inputElement);
containerElement.appendChild(btnElement);
containerElement.appendChild(ulElement);
