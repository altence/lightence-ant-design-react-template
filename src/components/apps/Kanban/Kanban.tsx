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
      tagStyle={{
        height: '1.875rem',
        borderRadius: '0.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.3125rem 0.625rem',
        margin: '0px',
        fontSize: theme.commonFontSizes.xs,
      }}
      laneStyle={{ background: 'transparent' }}
      cardStyle={{
        borderRadius: theme.border.radius,
        backgroundColor: theme.commonColors.white,
        padding: `1.25rem 1rem`,
        marginBottom: '1rem',
        minWidth: '15.9375rem',
        maxWidth: '15.9375rem',
      }}
    />
  );
};
