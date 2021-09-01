import React from 'react';
import { Button } from 'antd';
import { CloseOutlined, ExclamationOutlined, FormOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import * as S from './SiderContent.styles';

const SiderContent: React.FC = () => {
  return (
    <S.Menu>
      <S.MenuItem key="1" icon={<CloseOutlined />}>
        <Link to="/404">
          <Button type="link">Error 404</Button>
        </Link>
      </S.MenuItem>
      <S.MenuItem key="2" icon={<ExclamationOutlined />}>
        <Link to="/500">
          <Button type="link">Error 500</Button>
        </Link>
      </S.MenuItem>
      <S.MenuItem key="3" icon={<FormOutlined />}>
        <Link to="/feed">
          <Button type="link">Feed</Button>
        </Link>
      </S.MenuItem>
    </S.Menu>
  );
};

export default SiderContent;
