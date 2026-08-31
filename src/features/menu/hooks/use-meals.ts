import type { TabType } from '@shared/types/type';
import { useQuery } from '@tanstack/react-query';

import { fetchMeals } from '../apis/meal-api';

export const useMeals = (restaurantType: TabType, date: string) => {
  return useQuery({
    queryKey: ['meals', restaurantType, date],
    queryFn: () => fetchMeals(restaurantType, date),
    staleTime: 1000 * 60 * 60,
  });
};
