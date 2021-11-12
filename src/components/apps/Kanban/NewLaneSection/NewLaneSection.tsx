import React from 'react';
import * as S from './NewLaneSection.styles';
import NewLaneImage from '../../../../assets/images/new-lane.png';
import { useTranslation } from 'react-i18next';

interface NewLaneSectionProps {
  onClick: () => void;
}

export const NewLaneSection: React.FC<NewLaneSectionProps> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <S.NewLaneSection onClick={onClick}>
      <S.CreateNewColumn>
        <S.PlusIcon />
        {t('kanban.createColumn')}
      </S.CreateNewColumn>
      <S.NewLaneImage src={NewLaneImage} />
    </S.NewLaneSection>
  );
};
