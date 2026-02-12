import { supabase } from '@shared/apis/supabase';
import type { TabType } from '@shared/types/type';

export const fetchMeals = async (restaurantType: TabType, day: number) => {
  const { data, error } = await supabase
    .from('meals')
    .select('*')
    .eq('restaurant_type', restaurantType)
    .eq('date_day', day);

  if (error) throw new Error(error.message);
  return data;
};
