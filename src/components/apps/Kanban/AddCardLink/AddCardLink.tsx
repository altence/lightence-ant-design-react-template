import React from 'react';
import { ReactComponent as PlusIcon } from '../../../../assets/icons/plus.svg';
import * as S from './AddCardLink.styles';

interface AddCardLinkProps {
  onClick: () => void;
}

export const AddCardLink: React.FC<AddCardLinkProps> = ({ onClick }) => {
  return (
    <S.AddCardWrapper onClick={onClick}>
      <PlusIcon />
    </S.AddCardWrapper>
  );
};
