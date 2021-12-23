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

  const handleDimensions = () => {
    const element = ref.current && ref.current.getBoundingClientRect();
    setDimensions({ width: element?.width, height: element?.height });
  };

  useEffect(() => {
    handleDimensions();

    window.addEventListener('resize', handleDimensions);

    return () => {
      window.removeEventListener('resize', handleDimensions);
    };
  }, [ref.current]);

  return { width: dimensions.width, height: dimensions.height };
};
