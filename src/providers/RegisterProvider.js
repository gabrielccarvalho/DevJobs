import api from '../services/api';

export default class Register {
  async register(name, email, password, cpf) {
    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password,
        numero_cadastro: cpf,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
