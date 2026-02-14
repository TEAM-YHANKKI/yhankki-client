import { STORAGE_KEYS } from '@shared/constants/storage';
import { useCallback, useState } from 'react';

export const useNickname = () => {
  const [nickname, setNickname] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.USER_NICKNAME) || '안뇽이';
  });

  const updateNickname = useCallback((newNickname: string) => {
    const trimmedNickname = newNickname.trim();
    if (!trimmedNickname) return;

    setNickname(trimmedNickname);
    localStorage.setItem(STORAGE_KEYS.USER_NICKNAME, trimmedNickname);
  }, []);

  return { nickname, updateNickname };
};
