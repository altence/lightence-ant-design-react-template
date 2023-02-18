import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { BaseSpin } from '../BaseSpin/BaseSpin';
import * as S from './BaseFeed.styles';

export interface BaseFeedProps {
  next: () => void;
  hasMore: boolean;
  children: React.ReactNode[];
  target?: string;
}

export const BaseFeed: React.FC<BaseFeedProps> = ({ next, hasMore, target = 'main-content', children }) => {
  return (
    <InfiniteScroll
      dataLength={children.length}
      next={next}
      hasMore={hasMore}
      loader={
        <S.SpinnerWrapper>
          <BaseSpin size="large" />
        </S.SpinnerWrapper>
      }
      scrollableTarget={target}
    >
      <S.NewsWrapper>{children}</S.NewsWrapper>
    </InfiniteScroll>
  );
};
