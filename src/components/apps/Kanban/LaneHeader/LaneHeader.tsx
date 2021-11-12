import React, { useMemo } from 'react';
import InlineInput from 'react-trello/dist/widgets/InlineInput';
import * as S from './LaneHeader.styles';
import { CardState } from '../interfaces';

interface LaneHeaderProps {
  updateTitle: () => void;
  editLaneTitle: boolean;
  laneDraggable: boolean;
  style: CSSStyleSheet;
  title: string;
  onDoubleClick: () => void;
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
  const numberOfCards = useMemo(() => (cards?.length ? `${cards.length}` : ''), [cards?.length]);
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
