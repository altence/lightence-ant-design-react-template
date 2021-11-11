import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { AddCard } from './AddCard/AddCard';
import { Card } from './Card/Card';
import { LaneHeader } from './LaneHeader/LaneHeader';
import { AddCardLink } from './AddCardLink/AddCardLink';
import { kanbanData } from 'constants/kanbanData';
import * as S from './Kanban.styles';
import './Kanban.less';

export const Kanban: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <S.Kanban
      components={{ Card, NewCardForm: AddCard, LaneHeader, AddCardLink }}
      editable
      laneDraggable
      data={kanbanData}
      tagStyle={{ border: `1px solid ${theme.colors.border.main}` }}
      laneStyle={{ background: 'transparent' }}
      cardStyle={{
        borderRadius: theme.border.radius,
        backgroundColor: theme.commonColors.white,
        padding: `1.25rem 1rem 1.5625rem 1rem`,
        filter: 'drop-shadow(0 4px 40px rgba(0, 0, 0, 0.07))',
        marginBottom: '1rem',
      }}
    />
  );
};
