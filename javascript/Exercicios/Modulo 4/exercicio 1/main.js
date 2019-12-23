var containerElement = document.querySelector('.container');

var labelElement = document.createElement('label');
labelElement.setAttribute('for', 'input');
labelElement.innerHTML = 'Idade ';

var inputElement = document.createElement('input');
inputElement.setAttribute('id', 'input');
inputElement.setAttribute('type', 'number');
inputElement.style.marginRight = '5px';

function checkAge() {
  return new Promise(function(resolve, reject) {
    if (inputElement.value >= 18) {
      resolve('Tem mais que 18 anos');
    } else {
      reject('Não tem 18 anos.');
    }
  });
}

var buttonElement = document.createElement('button');

buttonElement.innerHTML = 'Verificar';
buttonElement.style.marginRight = '5px';
buttonElement.onclick = checkAge;

var resultElement = document.createElement('p');

checkAge()
  .then(function(response) {
    resultElement.innerHTML = response
  })
  .catch(function(error) {
    resultElement.innerHTML = error;
  });


containerElement.appendChild(labelElement);
containerElement.appendChild(inputElement);
containerElement.appendChild(buttonElement);
containerElement.appendChild(resultElement);
