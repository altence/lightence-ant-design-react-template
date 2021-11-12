import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import * as S from './AddCardLink.styles';

interface AddCardLinkProps {
  onClick: () => void;
}

export const AddCardLink: React.FC<AddCardLinkProps> = ({ onClick }) => {
  return (
    <S.AddCardWrapper onClick={onClick}>
      <PlusOutlined />
    </S.AddCardWrapper>
  );
};
