import React, { ReactNode, useMemo, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import useDebounce from '../../../../hooks/useDebounce';
import { AppDate, Dates } from '../../../../constants/Dates';
import { Post } from '../../../../api/news.api';
import * as S from './NewsFilter.styles';

interface NewsFilterProps {
  news: Post[];
  children: ({ filteredNews }: { filteredNews: Post[] }) => ReactNode;
}

export const NewsFilter: React.FC<NewsFilterProps> = ({ news, children }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [dates, setDates] = useState<[AppDate, AppDate] | [null, null]>([null, null]);

  const { t } = useTranslation();

  const handleClickReset = () => {
    setAuthor('');
    setTitle('');
    setDates([null, null]);
  };

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

  return (
    <>
      <Dropdown
        trigger={['click']}
        overlay={
          <Menu>
            <S.Dropdown>
              <S.Input
                placeholder={t('newsFeed.authorSearch')}
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
              <S.Input
                placeholder={t('newsFeed.titleSearch')}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <S.RangePicker
                dropdownClassName="range-picker"
                value={dates}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(dates: any) => setDates([dates[0], dates[1]])}
              />
              <S.Btn onClick={handleClickReset}>{t('newsFeed.reset')}</S.Btn>
            </S.Dropdown>
          </Menu>
        }
      >
        <S.TitleHeader>
          <S.Title>{t('newsFeed.filter')}</S.Title>
        </S.TitleHeader>
      </Dropdown>

      {children({ filteredNews: filteredNews || news })}
    </>
  );
};
