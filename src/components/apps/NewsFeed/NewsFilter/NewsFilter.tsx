import React, { ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { RangeValue } from 'rc-picker/lib/interface.d';
import { useTranslation } from 'react-i18next';
import { AppDate, Dates } from '../../../../constants/Dates';
import { Post } from '../../../../api/news.api';
import { newsTags as defaultTags } from 'constants/newsTags';
import { Dropdown } from 'antd';
import { Tag, ITag } from 'components/common/Tag/Tag';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './NewsFilter.styles';

interface NewsFilterProps {
  news: Post[];
  newsTags?: ITag[];
  children: ({ filteredNews }: { filteredNews: Post[] }) => ReactNode;
}

interface Filter {
  author: string;
  setAuthor: (author: string) => void;
  title: string;
  setTitle: (title: string) => void;
  newsTagData: ITag[];
  onTagClick: (tag: ITag) => void;
  selectedTagsIds: Array<string>;
  selectedTags: ITag[];
  dates: [AppDate | null, AppDate | null];
  setDates: (dates: [AppDate | null, AppDate | null]) => void;
  handleClickReset: () => void;
  filterNews: () => void;
}

const Filter: React.FC<Filter> = ({
  author,
  setAuthor,
  title,
  setTitle,
  newsTagData,
  onTagClick,
  selectedTagsIds,
  selectedTags,
  dates,
  setDates,
  handleClickReset,
  filterNews,
}) => {
  const { t } = useTranslation();
  const { mobileOnly } = useResponsive();
  return (
    <S.FilterWrapper>
      {!mobileOnly && <S.FilterTitle>{t('newsFeed.filter')}</S.FilterTitle>}
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
          <S.AddTagText>{t('newsFeed.tag')}</S.AddTagText>
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
        <S.DateLabel>{t('newsFeed.from')}</S.DateLabel>
        <S.DateLabel>{t('newsFeed.to')}</S.DateLabel>
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
  );
};

export const NewsFilter: React.FC<NewsFilterProps> = ({ news, newsTags, children }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState<ITag[]>([]);
  const [dates, setDates] = useState<[AppDate | null, AppDate | null]>([null, null]);
  const [filteredNews, setFilteredNews] = useState<Post[]>(news);
  const { mobileOnly } = useResponsive();
  const { t } = useTranslation();

  const newsTagData = Object.values(newsTags || defaultTags);
  const selectedTagsIds = useMemo(() => selectedTags.map((item) => item.id), [selectedTags]);

  const onTagClick = useCallback(
    (tag: ITag) => {
      const isExist = selectedTagsIds.includes(tag.id);

      if (isExist) {
        setSelectedTags(selectedTags.filter((item) => item.id !== tag.id));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    },
    [selectedTags, setSelectedTags],
  );

  useEffect(() => {
    if (!author && !title && !dates[0]) {
      filterNews();
    }
  }, [news.length, title, author, dates]);

  const filterNews = useCallback(() => {
    let updatedNews = [...news];
    if (author || title || dates.length || selectedTags.length) {
      updatedNews = news.filter((post) => {
        const postAuthor = post.author.toLowerCase();
        const enteredAuthor = author.toLowerCase();
        const postTitle = post.title.toLowerCase();
        const enteredTitle = title.toLowerCase();
        const postTags = post.tags;
        const postDate = Dates.getDate(post.date);
        const fromDate = dates[0];
        const toDate = dates[1];

        return (
          (author ? postAuthor.includes(enteredAuthor) : true) &&
          (dates[0] ? postDate.isAfter(fromDate) && postDate.isBefore(toDate) : true) &&
          (title ? postTitle.includes(enteredTitle) : true) &&
          (selectedTags.length
            ? !!postTags.filter((n) => {
                return selectedTags.indexOf(n) !== -1;
              }).length
            : true)
        );
      });
    }
    setFilteredNews(
      updatedNews.sort((a, b) => {
        return b.date - a.date;
      }),
    );
  }, [news, author, title, dates, selectedTags]);

  const handleClickReset = useCallback(() => {
    setAuthor('');
    setTitle('');
    setDates([null, null]);
    setSelectedTags([]);
  }, [setAuthor, setTitle, setDates, setSelectedTags]);

  return (
    <>
      <S.TitleWrapper>
        <S.Title>{t('newsFeed.feed')}</S.Title>
        {mobileOnly && (
          <Dropdown
            placement="bottomLeft"
            trigger={['click']}
            overlay={
              <Filter
                author={author}
                setAuthor={setAuthor}
                title={title}
                setTitle={setTitle}
                newsTagData={newsTagData}
                onTagClick={onTagClick}
                selectedTagsIds={selectedTagsIds}
                selectedTags={selectedTags}
                dates={dates}
                setDates={setDates}
                handleClickReset={handleClickReset}
                filterNews={filterNews}
              />
            }
          >
            <S.FilterButton>{t('newsFeed.filter')}</S.FilterButton>
          </Dropdown>
        )}
      </S.TitleWrapper>
      <S.ContentWrapper>
        <S.NewsWrapper>{children({ filteredNews: filteredNews || news })}</S.NewsWrapper>
        {!mobileOnly && (
          <Filter
            author={author}
            setAuthor={setAuthor}
            title={title}
            setTitle={setTitle}
            newsTagData={newsTagData}
            onTagClick={onTagClick}
            selectedTagsIds={selectedTagsIds}
            selectedTags={selectedTags}
            dates={dates}
            setDates={setDates}
            handleClickReset={handleClickReset}
            filterNews={filterNews}
          />
        )}
      </S.ContentWrapper>
    </>
  );
};
