import React, { useEffect, useState } from 'react';
import { Card } from '../common/Card/Card';
import { NewsFilter } from './NewsFilter/NewsFilter';
import { getNews, Post } from '../../api/news.api';
import { Feed } from '../common/Feed/Feed';

export interface FilterState {
  author: string;
  title: string;
}

export const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<Post[]>([]);

  useEffect(() => {
    getNews().then((res) => setNews(res));
  }, []);

  return (
    <Card>
      <NewsFilter news={news} setNews={setNews} RenderComponent={Feed} />
    </Card>
  );
};
