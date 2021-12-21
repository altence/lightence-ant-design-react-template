import { useState, useEffect } from 'react';

type ScrollDirection = 'down' | 'up';

interface ScrollReturn {
  scrollY: number;
  scrollX: number;
  scrollDirection: ScrollDirection;
}

export const useScroll = (): ScrollReturn => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('down');

  const handleScroll = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'up' : 'down');
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
};
