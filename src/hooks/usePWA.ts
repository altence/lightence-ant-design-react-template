import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addDeferredPrompt } from '@app/store/slices/pwaSlice';

export const usePWA = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      dispatch(addDeferredPrompt(e));
    };

    window.addEventListener('beforeinstallprompt', handler);
  }, [dispatch]);
};
