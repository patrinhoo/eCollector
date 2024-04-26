import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';

import { authService } from '../api/authService';

export const getAuthHeaders = () => {
  const token = authService.getToken();

  if (!token) {
    return {};
  }

  return {
    headers: { Authorization: `Token ${token}` },
  };
};

export const useApi = ({
  url,
  method = null,
  requestData = null,
  enabled = true,
  params,
}) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // eslint-disable-next-line
  const fetchData = () => {
    if (!isLoading) {
      setIsLoading(true);
    }
    if (isError) {
      setIsError(false);
    }

    const headers = getAuthHeaders();

    axios({
      url,
      method: method ?? undefined,
      data: requestData ?? undefined,
      params,
      ...headers,
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          message.error('Musisz się zalogować!');
          navigate('/login');
        }
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
    // eslint-disable-next-line
  }, [url, enabled, requestData, params]);

  return useMemo(
    () => ({
      isLoading,
      isError,
      data,
      refetch: fetchData,
    }),
    [isLoading, isError, data, fetchData]
  );
};
