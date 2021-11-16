import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import * as S from './Tag.styles';

export interface ITag {
  id: string;
  title: string;
  bgColor: string;
}

interface TagProps {
  title: string;
  color?: string;
  bgColor?: string;
  removeTag?: () => void;
}

export const Tag: React.FC<TagProps> = ({ title, color, bgColor, removeTag, ...otherProps }) => {
  const theme = useContext(ThemeContext);
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
