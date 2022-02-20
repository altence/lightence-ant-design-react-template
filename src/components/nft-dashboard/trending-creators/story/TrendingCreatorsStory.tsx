import React from 'react';
import * as S from './TrendingCreatorsStory.styles';
import logo from 'assets/logo.png';

interface CreatorStoryProps {
  onStoryOpen: () => void;
}

export const TrendingCreatorsStory: React.FC<CreatorStoryProps> = ({ onStoryOpen }) => {
  return (
    <S.CreatorButton onClick={onStoryOpen}>
      <S.CreatorWrapper>
        <S.CreatorImage src={logo} />
      </S.CreatorWrapper>
    </S.CreatorButton>
  );
};
