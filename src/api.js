import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-app-3-q81x.onrender.com',
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = token;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;