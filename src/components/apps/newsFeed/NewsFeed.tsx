import React, { useEffect, useState } from 'react';
import { Empty } from 'antd';
import { ArticleCard } from '@app/components/common/ArticleCard/ArticleCard';
import { Feed } from '@app/components/common/Feed/Feed';
import { NewsFilter } from '@app/components/apps/newsFeed/NewsFilter/NewsFilter';
import { getNews, Post } from '@app/api/news.api';

export const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<Post[]>([]);
  const [hasMore] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    getNews()
      .then((res) => setNews(res))
      .finally(() => setLoaded(true));
  }, []);

  const next = () => {
    getNews().then((newNews) => setNews(news.concat(newNews)));
  };

  return (
    <NewsFilter news={news}>
      {({ filteredNews }) =>
        filteredNews?.length || !loaded ? (
          <Feed next={next} hasMore={hasMore}>
            {filteredNews.map((post, index) => (
              <ArticleCard
                key={index}
                title={post.title}
                description={post.text}
                date={post.date}
                imgUrl={post.img}
                author={post.author}
                avatar={post.avatarUrl}
                tags={post.tags}
              />
            ))}
          </Feed>
        ) : (
          <Empty />
        )
      }
    </NewsFilter>
  );
};
