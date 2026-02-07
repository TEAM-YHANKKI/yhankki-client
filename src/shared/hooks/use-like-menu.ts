import { STORAGE_KEYS } from '@shared/constants/storage';
import { useCallback, useEffect, useState } from 'react';

export const useLikeMenu = (onShowToast: (msg: string) => void) => {
  const [likeMenu, setLikeMenu] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LIKE_MENU);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LIKE_MENU, JSON.stringify(likeMenu));
  }, [likeMenu]);

  const addLike = useCallback(
    (items: string | string[]) => {
      const itemsToAdd = Array.isArray(items) ? items : [items];
      const newItems = itemsToAdd.filter((menu) => !likeMenu.includes(menu));

      if (likeMenu.length + newItems.length > 10) {
        onShowToast('최대 10개까지만 등록 가능합니다.');
        return;
      }

      if (newItems.length > 0) {
        setLikeMenu((prev) => [...prev, ...newItems]);
        onShowToast('찜 목록에 저장되었어요!');
      }
    },
    [likeMenu, onShowToast],
  );

  const deleteLike = useCallback((name: string) => {
    setLikeMenu((prev) => prev.filter((item) => item !== name));
  }, []);

  return { likeMenu, addLike, deleteLike };
};
