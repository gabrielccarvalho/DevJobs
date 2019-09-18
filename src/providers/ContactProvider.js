import api from '../services/api';

export default class Contact {
  async contact(name, email, phone_number) {
    try {
      const response = await api.post('/contact', {
        name: name,
        email: email,
        phone_number: phone_number,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
