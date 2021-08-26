import React from 'react';
import { Button } from 'antd';
import { CloseOutlined, ExclamationOutlined } from '@ant-design/icons';
import * as S from './SiderContent.styles';

const SiderContent: React.FC = () => {
  return (
    <S.Menu>
      <S.MenuItem icon={<CloseOutlined />}>
        <Button type="link" href="/404">
          Error 404
        </Button>
      </S.MenuItem>
      <S.MenuItem icon={<ExclamationOutlined />}>
        <Button type="link" href="/500">
          Error 500
        </Button>
      </S.MenuItem>
    </S.Menu>
  );
};

export default SiderContent;
