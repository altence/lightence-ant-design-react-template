import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { NewCardForm } from './NewCardForm/NewCardForm';
import { Card } from './Card/Card';
import { LaneHeader } from './LaneHeader/LaneHeader';
import { AddCardLink } from './AddCardLink/AddCardLink';
import { NewLaneSection } from './NewLaneSection/NewLaneSection';
import { NewLaneForm } from './NewLaneForm/NewLaneForm';
import { kanbanData } from 'constants/kanbanData';
import * as S from './Kanban.styles';

export const Kanban: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <S.Kanban
      components={{
        Card,
        NewCardForm,
        LaneHeader,
        AddCardLink,
        NewLaneSection,
        NewLaneForm,
      }}
      editable
      laneDraggable
      canAddLanes
      data={kanbanData}
      laneStyle={{ background: 'transparent', maxHeight: '80vh' }}
      cardStyle={{
        borderRadius: theme.border.radius,
        backgroundColor: theme.colors.main.mainBackground,
        padding: `1.25rem 1rem`,
        marginBottom: '1rem',
        minWidth: '15.9375rem',
        maxWidth: '15.9375rem',
      }}
    />
  );
};
