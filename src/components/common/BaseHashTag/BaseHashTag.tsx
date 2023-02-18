import React from 'react';
import * as S from './BaseHashTag.styles';

export interface IHashTag {
  id: string;
  title: string;
  bgColor: 'error' | 'success' | 'warning';
}

interface BaseHashTagProps {
  title: string;
  color?: string;
  bgColor?: 'error' | 'success' | 'warning' | 'primary';
  removeTag?: () => void;
}

export const BaseHashTag: React.FC<BaseHashTagProps> = ({ title, color, bgColor, removeTag, ...otherProps }) => {
  const style = {
    color: color || 'var(--white)',
    backgroundColor: bgColor ? `var(--${bgColor}-color)` : 'var(--orange)',
  };
  return (
    <S.TagWrapper style={style} {...otherProps}>
      #{title}
      {!!removeTag && (
        <S.RemoveTagWrapper
          onClick={(e) => {
            removeTag();
            e.stopPropagation();
          }}
        >
          <S.RemoveTagIcon />
        </S.RemoveTagWrapper>
      )}
    </S.TagWrapper>
  );
};
