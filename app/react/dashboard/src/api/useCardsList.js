import { useMemo } from 'react';
import { useApi } from '../hooks/useApi';

export const useCardsList = (params) => {
  const { isLoading, isError, data } = useApi({
    url: `/api/cards/`,
    params,
  });

  return useMemo(
    () => ({
      isLoading,
      isError: isError || (!isLoading && !data),
      data,
    }),
    [isLoading, isError, data]
  );
};
