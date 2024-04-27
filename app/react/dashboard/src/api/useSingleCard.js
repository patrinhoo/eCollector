import { useMemo } from 'react';
import { useApi } from '../hooks/useApi';

export const useSingleCard = (id) => {
  const { isLoading, isError, data } = useApi({
    url: `/api/cards/${id}/`,
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
