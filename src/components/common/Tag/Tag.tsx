import React from 'react';
import { useTheme } from 'styled-components';
import * as S from './Tag.styles';

export interface ITag {
  id: string;
  title: string;
  bgColor: 'error' | 'success' | 'warning';
}

interface TagProps {
  title: string;
  color?: string;
  bgColor?: string;
  removeTag?: () => void;
}

export const Tag: React.FC<TagProps> = ({ title, color, bgColor, removeTag, ...otherProps }) => {
  const theme = useTheme();
  const style = { color: color || theme.commonColors.white, backgroundColor: bgColor || theme.commonColors.orange };
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
