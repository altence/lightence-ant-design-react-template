import React from 'react';
import { NewCardForm } from '../newCardForm/NewCardForm/NewCardForm';
import { Card } from '../Card/Card';
import { LaneHeader } from '../LaneHeader/LaneHeader';
import { AddCardLink } from '../AddCardLink/AddCardLink';
import { NewLaneSection } from '../NewLaneSection/NewLaneSection';
import { NewLaneForm } from '../NewLaneForm/NewLaneForm';
import { kanbanData } from '@app/constants/kanbanData';
import * as S from './Kanban.styles';
import { BORDER_RADIUS } from '@app/styles/themes/constants';

export const Kanban: React.FC = () => {
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
      laneStyle={{ background: 'transparent', maxHeight: '100%' }}
      cardStyle={{
        borderRadius: BORDER_RADIUS,
        backgroundColor: 'var(--background-color)',
        padding: `1.25rem 1rem`,
        marginBottom: '1rem',
        minWidth: '16rem',
        maxWidth: '16rem',
      }}
    />
  );
};
