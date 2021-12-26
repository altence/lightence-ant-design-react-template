import React, { useEffect, useState } from 'react';
import { NewsFilter } from './NewsFilter/NewsFilter';
import { getNews, Post } from '../../../api/news.api';
import { Feed } from '../../common/Feed/Feed';
import { Empty } from 'antd';

export const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<Post[]>([]);
  const [hasMore] = useState<boolean>(true);

  useEffect(() => {
    getNews().then((res) => setNews(res));
  }, []);

  const next = () => {
    getNews().then((newNews) => setNews(news.concat(newNews)));
  };
  return (
    <NewsFilter news={news}>
      {({ filteredNews }) =>
        filteredNews?.length || hasMore ? <Feed cards={filteredNews} next={next} hasMore={hasMore} /> : <Empty />
      }
    </NewsFilter>
  );
};
