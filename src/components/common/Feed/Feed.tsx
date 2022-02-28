import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spin } from 'antd';
import * as S from './Feed.styles';

export interface FeedProps {
  next: () => void;
  hasMore: boolean;
  children: React.ReactNode[];
}

export const Feed: React.FC<FeedProps> = ({ next, hasMore, children }) => {
  return (
    <InfiniteScroll
      dataLength={children.length}
      next={next}
      hasMore={hasMore}
      loader={
        <S.SpinnerWrapper>
          <Spin size="large" />
        </S.SpinnerWrapper>
      }
      scrollableTarget="main-content"
    >
      <S.NewsWrapper>{children}</S.NewsWrapper>
    </InfiniteScroll>
  );
};
