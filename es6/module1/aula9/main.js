const usuario = {
  nome: 'Daniel',
  idade: 20,
  endereco: {
    cidade: 'Areia',
    estado: 'PB'
  }
}

//const { nome, idade, endereco: { cidade, estado } } = usuario;

//console.log(nome);
//console.log(idade);
//console.log(cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);

