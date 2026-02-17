import { supabase } from '@shared/apis/supabase';

export interface CarouselData {
  id: number;
  image_url: string;
  link_url?: string;
  priority: number;
}

export const fetchCarousels = async (): Promise<CarouselData[]> => {
  const { data, error } = await supabase
    .from('carousels')
    .select('*')
    .eq('is_active', true)
    .order('priority', { ascending: true }); // 우선순위 낮은 순 정렬

  if (error) throw new Error(error.message);
  return data || [];
};
