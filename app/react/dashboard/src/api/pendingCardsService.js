import axios from 'axios';
import { getAuthHeaders } from '../hooks/useApi';

export const pendingCardsService = {};

pendingCardsService.upgrade = (pendingCardId, data) => {
  const { headers } = getAuthHeaders();

  const url = `/api/pendingcards/${pendingCardId}/upgrade/`;

  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'POST',
      data,
      headers: headers,
    })
      .then((response) => {
        if (response?.status !== 201) {
          reject();
        }

        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

pendingCardsService.delete = (pendingCardId) => {
  const { headers } = getAuthHeaders();

  const url = `/api/pendingcards/${pendingCardId}/`;

  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'DELETE',
      headers: headers,
    })
      .then((response) => {
        if (response?.status !== 204) {
          reject(response);
        }

        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
