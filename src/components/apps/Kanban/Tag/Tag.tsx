import React from 'react';
import * as S from './Tag.styles';

interface TagProps {
  title: string;
  color?: string;
  bgcolor?: string;
  removeTag: () => void;
}

export const Tag: React.FC<TagProps> = ({ title, color, bgcolor, removeTag, ...otherProps }) => {
  const style = { color: color || 'white', backgroundColor: bgcolor || 'orange' };
  return (
    <S.TagWrapper style={style} {...otherProps}>
      #{title}
      <S.RemoveTagWrapper
        onClick={(e) => {
          removeTag();
          e.stopPropagation();
        }}
      >
        <S.RemoveTagIcon />
      </S.RemoveTagWrapper>
    </S.TagWrapper>
  );
};
