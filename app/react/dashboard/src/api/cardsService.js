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

cardsService.delete = (cardId) => {
  const { headers } = getAuthHeaders();

  const url = `/api/cards/${cardId}/`;

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

cardsService.export = () => {
  const { headers } = getAuthHeaders();

  const url = `/api/export/pdf/`;

  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'GET',
      headers: headers,
      responseType: 'blob',
    })
      .then((response) => {
        if (response?.status !== 200) {
          reject(response);
        }

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cards_collection.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();

        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
