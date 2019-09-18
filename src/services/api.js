import axios from 'axios';

const homolog = 'http://localhost:80';

const api = axios.create({
  baseURL: homolog,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
