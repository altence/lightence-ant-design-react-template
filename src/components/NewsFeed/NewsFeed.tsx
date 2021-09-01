import React, { useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Advice } from '../dashboard/PiecesOfAdviceCard/Advice/Advice';
import { getNews, Post } from '../../api/news.api';
import * as S from './NewsFeed.styles';
import { NewsFilter } from './NewsFilter/NewsFilter';
import { AppDate, Dates } from '../../constants/Dates';
import useDebounce from '../../hooks/useDebounce';
import { Card } from '../common/Card/Card.styles';

export interface FilterState {
  author: string;
  title: string;
}

export const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<Post[]>([]);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [dates, setDates] = useState<[AppDate, AppDate] | [null, null]>([null, null]);

  const debouncedAuthor = useDebounce(author, 1500);
  const debouncedTitle = useDebounce(title, 1500);
  const debouncedDates = dates.map((date) => useDebounce(date, 1500));

  const filteredNews = useMemo(() => {
    let result;

    if (debouncedAuthor || debouncedTitle || debouncedDates[0]) {
      result = news.filter((post) => {
        const postAuthor = post.author.toLowerCase();
        const enteredAuthor = debouncedAuthor.toLowerCase();
        const postTitle = post.title.toLowerCase();
        const enteredTitle = debouncedTitle.toLowerCase();
        const postDate = Dates.getDate(post.date);
        const fromDate = debouncedDates[0];
        const toDate = debouncedDates[1];

        return (
          (debouncedAuthor ? postAuthor.includes(enteredAuthor) : true) &&
          (debouncedDates[0] ? postDate.isAfter(fromDate) && postDate.isBefore(toDate) : true) &&
          (debouncedTitle ? postTitle.includes(enteredTitle) : true)
        );
      });
    }

    return result;
  }, [debouncedAuthor, debouncedTitle, debouncedDates]);

  useEffect(() => {
    getNews().then((res) => setNews(res));
  }, []);

  const next = () => {
    getNews().then((res) =>
      setNews((prev) => {
        return prev.concat(res);
      }),
    );
  };

  const hasMore = (!filteredNews && true) || false;

  return news ? (
    <Card>
      <NewsFilter
        author={author}
        setAuthor={setAuthor}
        title={title}
        setTitle={setTitle}
        dates={dates}
        setDates={setDates}
      />
      <InfiniteScroll dataLength={news.length} next={next} hasMore={hasMore} loader={<h4>Loading...</h4>}>
        <S.NewsWrapper>
          {!filteredNews
            ? news.map((post, index) => (
                <Advice
                  key={index}
                  title={post.title}
                  description={post.text}
                  date={post.date}
                  imgUrl={post.img}
                  author={post.author}
                  keywords
                />
              ))
            : filteredNews.length !== 0
            ? filteredNews.map((post, index) => (
                <Advice
                  key={index}
                  title={post.title}
                  description={post.text}
                  date={post.date}
                  imgUrl={post.img}
                  author={post.author}
                  keywords
                />
              ))
            : 'Nothing found'}
        </S.NewsWrapper>
      </InfiniteScroll>
    </Card>
  ) : null;
};
