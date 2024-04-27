import axios from 'axios';

export const authService = {};

authService.login = (data) => {
  const url = '/api/user/token';
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((response) => {
        if (response?.status !== 200) {
          reject();
        }

        localStorage.setItem('token', JSON.stringify(response.data.token));
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

authService.getToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return JSON.parse(token);
  }
  return false;
};
