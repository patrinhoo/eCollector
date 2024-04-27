import axios from 'axios';
import { getAuthHeaders } from '../hooks/useApi';

export const userService = {};

userService.getUserData = () => {
  const { headers } = getAuthHeaders();

  const url = `/api/user/me`;

  return new Promise((resolve, reject) => {
    axios({
      url,
      headers: headers,
    })
      .then((response) => {
        if (response?.status !== 200) {
          reject(response);
        }

        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

userService.update = (data) => {
  const { headers } = getAuthHeaders();

  const url = `/api/user/me`;

  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'PATCH',
      data: data,
      headers: headers,
    })
      .then((response) => {
        if (response?.status !== 200) {
          reject(response);
        }

        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
