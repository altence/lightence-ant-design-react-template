import React from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { ITag } from '../Tag/Tag';
import * as S from './Feed.styles';

interface FeedCard {
  avatarUrl: string;
  author: string;
  title: string;
  date: number;
  text: string;
  img: string;
  tags: ITag[];
}

export interface FeedProps {
  cards: FeedCard[];
  next: () => void;
  hasMore: boolean;
}

export const Feed: React.FC<FeedProps> = ({ cards, next, hasMore }) => {
  const { t } = useTranslation();

  return (
    <InfiniteScroll dataLength={cards.length} next={next} hasMore={hasMore} loader={<h4>{t('common.loading')}</h4>}>
      <S.NewsWrapper>
        {cards.map((post, index) => (
          <ArticleCard
            key={index}
            title={post.title}
            description={post.text}
            date={post.date}
            imgUrl={post.img}
            author={post.author}
            avatar={post.avatarUrl}
            tags={post.tags}
            keywords
          />
        ))}
      </S.NewsWrapper>
    </InfiniteScroll>
  );
};
