import React from 'react';
import InlineInput from 'react-trello/dist/widgets/InlineInput';
import * as S from './LaneHeader.styles';
import { CardState } from '../interfaces';

interface LaneHeaderProps {
  updateTitle: () => void;
  editLaneTitle: boolean;
  canAddLanes: boolean;
  laneDraggable: boolean;
  style: CSSStyleSheet;
  label: string;
  title: string;
  onDelete: () => void;
  onDoubleClick: () => void;
  titleStyle: CSSStyleSheet;
  labelStyle: CSSStyleSheet;
  cards: Array<CardState>;
}

export const LaneHeader: React.FC<LaneHeaderProps> = ({
  updateTitle,
  onDoubleClick,
  editLaneTitle = false,
  title,
  laneDraggable,
  style,
  cards,
}) => {
  const numberOfCards = cards?.length ? `${cards.length}` : '';
  return (
    <S.Header onDoubleClick={onDoubleClick} editLaneTitle={editLaneTitle} style={style}>
      <S.Title draggable={laneDraggable}>
        {editLaneTitle ? (
          <InlineInput value={title} border placeholder={title} resize="vertical" onSave={updateTitle} />
        ) : (
          <>
            {title}
            {cards.length ? <S.Dot>·</S.Dot> : ''}
            {numberOfCards}
          </>
        )}
      </S.Title>
    </S.Header>
  );
};
