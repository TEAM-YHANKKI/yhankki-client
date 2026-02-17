import { useQuery } from '@tanstack/react-query';

import { fetchNotices } from '../apis/notice-api';

export const useNotices = (category: 'home' | 'team') => {
  return useQuery({
    queryKey: ['notices', category],
    queryFn: () => fetchNotices(category),
    staleTime: 1000 * 60 * 60,
  });
};
