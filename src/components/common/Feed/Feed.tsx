import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Advice } from '../../dashboard/PiecesOfAdviceCard/Advice/Advice';
import { getNews, Post } from '../../../api/news.api';
import * as S from './Feed.styles';

export interface FeedProps {
  data: Post[];
  setNews: (fc: (state: Post[]) => Post[]) => void;
  isFiltered: boolean;
}

export const Feed: React.FC<FeedProps> = ({ data, setNews, isFiltered }) => {
  const hasMore = isFiltered ? false : true;

  const next = () => {
    getNews().then((res) =>
      setNews((prev) => {
        return prev.concat(res);
      }),
    );
  };

  return (
    <InfiniteScroll dataLength={data.length} next={next} hasMore={hasMore} loader={<h4>Loading...</h4>}>
      <S.NewsWrapper>
        {data.map((post, index) => (
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
