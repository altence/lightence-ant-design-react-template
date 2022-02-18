import React, { useEffect, useState } from 'react';

interface RequireFullscreenProps {
  component: React.RefObject<HTMLElement>;
  children: (isFullscreen: boolean) => React.ReactNode;
}

export const RequireFullscreen: React.FC<RequireFullscreenProps> = ({ component, children }) => {
  const [isFullscreen, setFullscreen] = useState(false);

  const handleFullScreen = () => {
    if (component?.current) {
      isFullscreen ? document.exitFullscreen() : component.current.requestFullscreen();
    }
  };

  useEffect(() => {
    const onFullScreenChange = () => {
      setFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener('fullscreenchange', onFullScreenChange);
    document.addEventListener('mozfullscreenchange', onFullScreenChange);
    document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    document.addEventListener('msfullscreenchange', onFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullScreenChange);
      document.removeEventListener('mozfullscreenchange', onFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
      document.removeEventListener('msfullscreenchange', onFullScreenChange);
    };
  }, []);

  return <div onClick={handleFullScreen}>{children(isFullscreen)}</div>;
};
