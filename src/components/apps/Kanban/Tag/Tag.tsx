import React from 'react';
import * as S from './Tag.styles';

interface TagProps {
  title: string;
  color?: string;
  bgColor?: string;
  removeTag: () => void;
}

export const Tag: React.FC<TagProps> = ({ title, color, bgColor, removeTag, ...otherProps }) => {
  const style = { color: color || 'white', backgroundColor: bgColor || 'orange' };
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
