import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Advice } from '../../dashboard/PiecesOfAdviceCard/Advice/Advice';
import * as S from './Feed.styles';

export interface FeedCard {
  avatarUrl: string;
  author: string;
  title: string;
  date: number;
  text: string;
  img: string;
}

export interface FeedProps {
  cards: FeedCard[];
  next: () => void;
  hasMore: boolean;
}

export const Feed: React.FC<FeedProps> = ({ cards, next, hasMore }) => {
  return (
    <InfiniteScroll dataLength={cards.length} next={next} hasMore={hasMore} loader={<h4>Loading...</h4>}>
      <S.NewsWrapper>
        {cards.map((post, index) => (
          <Advice
            key={index}
            title={post.title}
            description={post.text}
            date={post.date}
            imgUrl={post.img}
            author={post.author}
            keywords
          />
        ))}
      </S.NewsWrapper>
    </InfiniteScroll>
  );
};
