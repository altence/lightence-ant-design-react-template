import React, { useEffect, useState } from 'react';
import { BaseArticle } from '@app/components/common/BaseArticle/BaseArticle';
import { BaseFeed } from '@app/components/common/BaseFeed/BaseFeed';
import { NewsFilter } from '@app/components/apps/newsFeed/NewsFilter/NewsFilter';
import { getNews, Post } from '@app/api/news.api';
import { BaseEmpty } from '@app/components/common/BaseEmpty/BaseEmpty';

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
          <BaseFeed next={next} hasMore={hasMore}>
            {filteredNews.map((post, index) => (
              <BaseArticle
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
          </BaseFeed>
        ) : (
          <BaseEmpty />
        )
      }
    </NewsFilter>
  );
};
