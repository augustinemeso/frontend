import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = token;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;