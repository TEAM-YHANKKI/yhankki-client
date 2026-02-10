import { STORAGE_KEYS } from '@shared/constants/storage';
import { useCallback, useEffect, useState } from 'react';

export const useLikeMenu = (onShowToast: (msg: string) => void) => {
  const [likeMenu, setLikeMenu] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LIKE_MENU);

    if (!saved) return [];

    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      localStorage.removeItem(STORAGE_KEYS.LIKE_MENU);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LIKE_MENU, JSON.stringify(likeMenu));
  }, [likeMenu]);

  const addLike = useCallback(
    (items: string | string[]) => {
      const itemsToAdd = Array.isArray(items) ? items : [items];
      const newItems = itemsToAdd.filter((menu) => !likeMenu.includes(menu));

      if (itemsToAdd.length > 0 && newItems.length === 0) {
        onShowToast('이미 등록된 메뉴입니다.');
        return;
      }

      if (likeMenu.length + newItems.length > 6) {
        onShowToast('최대 6개까지만 등록 가능합니다.');
        return;
      }

      if (newItems.length > 0) {
        setLikeMenu((prev) => [...prev, ...newItems]);
        onShowToast('좋아하는 메뉴에 저장되었어요!');
      }
    },
    [likeMenu, onShowToast],
  );

  const deleteLike = useCallback((name: string) => {
    setLikeMenu((prev) => prev.filter((item) => item !== name));
  }, []);

  return { likeMenu, addLike, deleteLike };
};
