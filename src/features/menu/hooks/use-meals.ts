import type { TabType } from '@shared/types/type';
import { useQuery } from '@tanstack/react-query';

import { fetchMeals } from '../apis/mealApi';

export const useMeals = (restaurantType: TabType, day: number) => {
  return useQuery({
    queryKey: ['meals', restaurantType, day],
    queryFn: () => fetchMeals(restaurantType, day),
    staleTime: 1000 * 60 * 60, // 식단은 자주 안 바뀌니 1시간 캐싱
  });
};
