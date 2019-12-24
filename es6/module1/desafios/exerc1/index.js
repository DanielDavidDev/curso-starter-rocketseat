class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }
  isAdmin() {
    console.log(this.admin);
  }
}

class Admin extends Usuario {
  constructor() {
    super();

    this.admin = true;
  }
}

const User1 = new Usuario('email@test.com', 'senha123');
const Adm1 = new Admin('email@test.com', 'senha123');

User1.isAdmin();
Adm1.isAdmin();
