import axios from 'axios';

export const registerService = {};

registerService.register = (data) => {
  const url = '/api/user/create';
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((response) => {
        if (response?.status !== 201) {
          reject();
        }

        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};
