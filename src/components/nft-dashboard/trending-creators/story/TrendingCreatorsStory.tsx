import React from 'react';
import * as S from './TrendingCreatorsStory.styles';

interface CreatorStoryProps {
  img: string;
  onStoryOpen: () => void;
  viewed: boolean;
}

export const TrendingCreatorsStory: React.FC<CreatorStoryProps> = ({ img, onStoryOpen, viewed }) => {
  return (
    <S.CreatorButton onClick={onStoryOpen} $viewed={viewed}>
      <S.Avatar src={img} alt="profile avatar" />
    </S.CreatorButton>
  );
};
