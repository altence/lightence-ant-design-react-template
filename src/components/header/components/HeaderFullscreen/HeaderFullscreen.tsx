import React, { useEffect, useRef } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Button } from '@app/components/common/buttons/Button/Button';
import { RequireFullscreen } from '@app/components/common/RequireFullscreen/RequireFullscreen';
import { HeaderActionWrapper } from '../../Header.styles';

export const HeaderFullscreen: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    rootRef.current = document.getElementById('root');
  }, []);

  return (
    <RequireFullscreen component={rootRef}>
      {(isFullscreen) => (
        <HeaderActionWrapper>
          <Button
            type={isFullscreen ? 'ghost' : 'text'}
            icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          />
        </HeaderActionWrapper>
      )}
    </RequireFullscreen>
  );
};
