import { useMemo } from 'react';
import { useApi } from '../hooks/useApi';

export const useSinglePendingCard = (id) => {
  const { isLoading, isError, data } = useApi({
    url: `/api/pendingcards/${id}/`,
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
