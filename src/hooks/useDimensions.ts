import { useEffect, useState } from 'react';

interface Dimension {
  width: number | undefined;
  height: number | undefined;
}

export const useDimensions = (ref: { current: Element | null }): Dimension => {
  const [dimensions, setDimensions] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleDimensions = () => {
      const element = ref.current && ref.current.getBoundingClientRect();
      setDimensions({ width: element?.width, height: element?.height });
    };

    handleDimensions();

    window.addEventListener('resize', handleDimensions);

    return () => {
      window.removeEventListener('resize', handleDimensions);
    };
  }, [ref]);

  return { width: dimensions.width, height: dimensions.height };
};
