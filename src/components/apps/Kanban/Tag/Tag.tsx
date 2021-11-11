import React from 'react';
import { TagSpan } from 'react-trello/dist/styles/Base';
import { ReactComponent as RemoveTag } from '../../../../assets/icons/close.svg';
import * as S from './Tag.styles';

interface TagProps {
  title: string;
  color?: string;
  bgcolor?: string;
  tagStyle?: CSSStyleSheet;
  removeTag: () => void;
}

export const Tag: React.FC<TagProps> = ({ title, color, bgcolor, tagStyle, removeTag, ...otherProps }) => {
  const style = { color: color || 'white', backgroundColor: bgcolor || 'orange', ...tagStyle };
  return (
    <TagSpan style={style} {...otherProps}>
      #{title}
      <S.RemoveTagWrapper onClick={removeTag}>
        <RemoveTag />
      </S.RemoveTagWrapper>
    </TagSpan>
  );
};
