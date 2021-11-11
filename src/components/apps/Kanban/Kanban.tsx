import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { AddCard } from './AddCard/AddCard';
import { Card } from './Card/Card';
import { LaneHeader } from './LaneHeader/LaneHeader';
import { kanbanData } from 'constants/kanbanData';
import * as S from './Kanban.styles';
import './Kanban.less';

export const Kanban: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <S.Kanban
      components={{ Card, NewCardForm: AddCard, LaneHeader }}
      editable
      laneDraggable
      data={kanbanData}
      tagStyle={{ border: `1px solid ${theme.colors.border.main}` }}
      laneStyle={{ background: 'transparent' }}
    />
  );
};
