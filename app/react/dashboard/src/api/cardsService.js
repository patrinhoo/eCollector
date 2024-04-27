import axios from 'axios';
import { getAuthHeaders } from '../hooks/useApi';

export const cardsService = {};

cardsService.create = (data) => {
  const { headers } = getAuthHeaders();

  const url = `/api/cards/`;

  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'POST',
      data,
      headers: { ...headers, 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        if (response?.status !== 201) {
          reject();
        }

        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

cardsService.update = (cardId, data) => {
  const { headers } = getAuthHeaders();

  const url = `/api/cards/${cardId}/`;

  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'PATCH',
      data,
      headers: { ...headers, 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        if (response?.status !== 200) {
          reject();
        }

        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
