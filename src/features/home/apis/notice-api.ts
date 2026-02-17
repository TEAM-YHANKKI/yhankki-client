import { supabase } from '@shared/apis/supabase';

export interface NoticeData {
  id: number;
  content: string;
  category: 'home' | 'team';
  is_active: boolean;
}

export const fetchNotices = async (
  category: 'home' | 'team',
): Promise<NoticeData[]> => {
  const { data, error } = await supabase
    .from('notices')
    .select('*')
    .eq('category', category)
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data || [];
};
