import React from 'react';
import { Button } from 'antd';
import { CloseOutlined, ExclamationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import * as S from './SiderContent.styles';

const SiderContent: React.FC = () => {
  return (
    <S.Menu>
      <S.MenuItem icon={<CloseOutlined />}>
        <Link to="/404">
          <Button type="link">Error 404</Button>
        </Link>
      </S.MenuItem>
      <S.MenuItem icon={<ExclamationOutlined />}>
        <Link to="/500">
          <Button type="link">Error 500</Button>
        </Link>
      </S.MenuItem>
    </S.Menu>
  );
};

export default SiderContent;
