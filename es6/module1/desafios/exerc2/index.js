const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1

 const idades = usuarios.map(user => user.idade);

console.log(idades);

// 2.2

const filter = usuarios.filter(user => {
  return user.empresa === 'Rocketseat' && user.idade >= 18
});

console.log(filter);

// 2.3

const find = usuarios.find(user => {
  return user.empresa === 'Google';
});

console.log(find);

// 2.4

const multidades = usuarios.map(user => {
 return {...user, ...user.idade *= 2}
});

const findOld50 = multidades.filter(user => {
  return user.idade <= 50;
});

console.log(findOld50);
