import { supabase } from '@shared/apis/supabase';
import type { TabType } from '@shared/types/type';

export const fetchMeals = async (restaurantType: TabType, date: string) => {
  const { data, error } = await supabase
    .from('meals')
    .select('*')
    .eq('restaurant_type', restaurantType)
    .eq('date_day', date);

  if (error) throw new Error(error.message);
  return data;
};
