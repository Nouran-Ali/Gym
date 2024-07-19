import axios from 'axios';

export const publicAxios = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  timeout: 10000,
});

export const PrivateAxios = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  timeout: 10000,
});

PrivateAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
