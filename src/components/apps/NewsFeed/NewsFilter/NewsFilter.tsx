import React, { ReactNode, useState, useEffect } from 'react';
import { RangeValue } from 'rc-picker/lib/interface.d';
import { useTranslation } from 'react-i18next';
import { AppDate, Dates } from '../../../../constants/Dates';
import { Post } from '../../../../api/news.api';
import { newsTags as defaultTags } from 'constants/newsTags';
import { Dropdown } from 'antd';
import * as S from './NewsFilter.styles';
import { Tag, ITag } from 'components/common/Tag/Tag';

interface NewsFilterProps {
  news: Post[];
  newsTags?: ITag[];
  children: ({ filteredNews }: { filteredNews: Post[] }) => ReactNode;
}

export const NewsFilter: React.FC<NewsFilterProps> = ({ news, newsTags, children }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState<ITag[]>([]);
  const [dates, setDates] = useState<[AppDate | null, AppDate | null]>([null, null]);
  const [filteredNews, setFilteredNews] = useState<Post[]>(news);

  const newsTagData = Object.values(newsTags || defaultTags);
  const selectedTagsIds = selectedTags.map((item) => item.id);

  const onTagClick = (tag: ITag) => {
    const isExist = selectedTagsIds.includes(tag.id);

    if (isExist) {
      setSelectedTags(selectedTags.filter((item) => item.id !== tag.id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  useEffect(() => {
    if (!author && !title && !dates[0]) {
      filterNews();
    }
  }, [news.length, title, author, dates]);

  const { t } = useTranslation();

  const filterNews = () => {
    if (author || title || dates.length || selectedTags.length) {
      const filteredNews = news.filter((post) => {
        const postAuthor = post.author.toLowerCase();
        const enteredAuthor = author.toLowerCase();
        const postTitle = post.title.toLowerCase();
        const enteredTitle = title.toLowerCase();
        const postTags = post.tags;
        const postDate = Dates.getDate(post.date);
        const fromDate = dates[0];
        const toDate = dates[1];

        return (author ? postAuthor.includes(enteredAuthor) : true) &&
          (dates[0] ? postDate.isAfter(fromDate) && postDate.isBefore(toDate) : true) &&
          (title ? postTitle.includes(enteredTitle) : true) &&
          selectedTags.length
          ? !!postTags.filter((n) => {
              return selectedTags.indexOf(n) !== -1;
            }).length
          : true;
      });
      setFilteredNews(filteredNews || []);
    } else {
      setFilteredNews(news);
    }
  };

  const handleClickReset = () => {
    setAuthor('');
    setTitle('');
    setDates([null, null]);
    setSelectedTags([]);
  };

  return (
    <>
      <S.Title>Feed</S.Title>
      <S.ContentWrapper>
        <S.NewsWrapper>{children({ filteredNews: filteredNews || news })}</S.NewsWrapper>
        <S.FilterWrapper>
          <S.FilterTitle>Filter</S.FilterTitle>
          <S.InputWrapper>
            <S.SearchIcon />
            <S.Input
              placeholder={t('newsFeed.authorSearch')}
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.SearchIcon />
            <S.Input
              placeholder={t('newsFeed.titleSearch')}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </S.InputWrapper>
          <Dropdown
            placement="bottomCenter"
            trigger={['click']}
            overlay={
              <S.TagPopover>
                {newsTagData.map((tag: ITag) => (
                  <S.TagPopoverLine
                    key={tag.id}
                    onClick={(e) => {
                      onTagClick(tag);
                      e.stopPropagation();
                    }}
                  >
                    <S.PopoverCheckbox checked={selectedTagsIds.includes(tag.id)} />
                    <Tag title={tag.title} bgColor={tag.bgColor} />
                  </S.TagPopoverLine>
                ))}
                <S.ClosePopoverWrapper>
                  <S.ClosePopover />
                </S.ClosePopoverWrapper>
              </S.TagPopover>
            }
          >
            <S.AddTagWrapper>
              <S.PlusIcon />
              Tag
            </S.AddTagWrapper>
          </Dropdown>
          {!!selectedTags.length && (
            <S.TagsWrapper>
              {selectedTags.map((tag) => (
                <Tag key={tag.id} title={tag.title} bgColor={tag.bgColor} />
              ))}
            </S.TagsWrapper>
          )}
          <S.DateLabels>
            <S.DateLabel>From</S.DateLabel>
            <S.DateLabel>To</S.DateLabel>
          </S.DateLabels>
          <S.RangePicker
            dropdownClassName="range-picker"
            value={dates}
            onChange={(dates: RangeValue<AppDate>) =>
              setDates([dates?.length ? dates[0] : null, dates?.length ? dates[1] : null])
            }
          />
          <S.BtnWrapper>
            <S.Btn onClick={handleClickReset}>{t('newsFeed.reset')}</S.Btn>
            <S.Btn onClick={filterNews} type="primary">
              {t('newsFeed.apply')}
            </S.Btn>
          </S.BtnWrapper>
        </S.FilterWrapper>
      </S.ContentWrapper>
    </>
  );
};
