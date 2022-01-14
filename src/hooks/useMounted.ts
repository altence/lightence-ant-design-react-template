import { MutableRefObject, useEffect, useRef } from 'react';

interface UseMountedReturnVal {
  isMounted: MutableRefObject<boolean>;
}

export const useMounted = (): UseMountedReturnVal => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { isMounted };
};
