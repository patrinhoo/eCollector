import { useMemo } from 'react';
import { useApi } from '../hooks/useApi';

export const usePendingCardsList = (params) => {
  const { isLoading, isError, data } = useApi({
    url: `/api/pendingcards/`,
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
