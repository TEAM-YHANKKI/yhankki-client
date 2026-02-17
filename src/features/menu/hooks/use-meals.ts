import type { TabType } from '@shared/types/type';
import { useQuery } from '@tanstack/react-query';

import { fetchMeals } from '../apis/meal-api';

export const useMeals = (restaurantType: TabType, day: number) => {
  return useQuery({
    queryKey: ['meals', restaurantType, day],
    queryFn: () => fetchMeals(restaurantType, day),
    staleTime: 1000 * 60 * 60,
  });
};
