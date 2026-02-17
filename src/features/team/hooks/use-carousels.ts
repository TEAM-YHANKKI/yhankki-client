import { useQuery } from '@tanstack/react-query';

import { fetchCarousels } from '../apis/carousel-api';

export const useCarousels = () => {
  return useQuery({
    queryKey: ['carousels'],
    queryFn: fetchCarousels,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 2,
  });
};
