import React from 'react';
import * as S from './NewLaneSection.styles';
import NewLaneImage from '../../../../assets/images/new-lane.png';

interface NewLaneSectionProps {
  onClick: () => void;
}

export const NewLaneSection: React.FC<NewLaneSectionProps> = ({ onClick }) => (
  <S.NewLaneSection onClick={onClick}>
    <S.CreateNewColumn>
      <S.Plus>+</S.Plus>Create new column
    </S.CreateNewColumn>
    <S.NewLaneImage src={NewLaneImage} />
  </S.NewLaneSection>
);
