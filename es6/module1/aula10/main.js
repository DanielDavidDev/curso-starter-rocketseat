// REST

/*
const usuario = {
  nome: 'Daniel',
  idade: 20,
  empresa: null,
};

const { nome, ...rest } = usuario;

console.log(nome);
console.log(rest);
*/

/*
const arr = [1,2,3,4,5,6];

const [a,b,...c] = arr;

console.log(a);
console.log(b);
console.log(c);
*/

/*
function soma(a, b, ...params) {
  // return params.reduce((total, next) => total+next);
  return params;
}

console.log(soma(1, 3, 4, 5, 6, 7));
*/

// SPREAD

/*
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2];

console.log(arr3);
*/

const usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat',
}

const usuario2 = {
  ...usuario1,
  nome: 'Daniel'
}

console.log(usuario2);
