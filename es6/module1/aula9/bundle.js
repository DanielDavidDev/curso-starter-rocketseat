"use strict";

var usuario = {
  nome: 'Daniel',
  idade: 20,
  endereco: {
    cidade: 'Areia',
    estado: 'PB'
  }
}; //const { nome, idade, endereco: { cidade, estado } } = usuario;
//console.log(nome);
//console.log(idade);
//console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
