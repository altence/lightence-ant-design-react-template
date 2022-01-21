import React, { ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import { RangeValue } from 'rc-picker/lib/interface.d';
import { Tag, ITag } from '@app/components/common/Tag/Tag';
import { AuthorValidator, TitleValidator, DatesValidator, TagsValidator } from './Validator';
import { useResponsive } from '@app/hooks/useResponsive';
import { newsTags as defaultTags } from '@app/constants/newsTags';
import { AppDate, Dates } from '@app/constants/Dates';
import { Post } from '@app/api/news.api';
import * as S from './NewsFilter.styles';

interface NewsFilterProps {
  news: Post[];
  newsTags?: ITag[];
  children: ({ filteredNews }: { filteredNews: Post[] }) => ReactNode;
}

interface Filter {
  author: string;
  title: string;
  newsTagData: ITag[];
  onTagClick: (tag: ITag) => void;
  selectedTagsIds: Array<string>;
  selectedTags: ITag[];
  dates: [AppDate | null, AppDate | null];
  updateFilteredField: (field: string, value: [AppDate | null, AppDate | null] | string) => void;
  onApply: () => void;
  onReset: () => void;
}

const Filter: React.FC<Filter> = ({
  author,
  title,
  newsTagData,
  onTagClick,
  selectedTagsIds,
  selectedTags,
  dates,
  onApply,
  onReset,
  updateFilteredField,
}) => {
  const { t } = useTranslation();
  const { mobileOnly } = useResponsive();

  const applyFilter = () => {
    onApply();
  };

  const resetFilter = () => {
    onReset();
  };

  return (
    <S.FilterWrapper>
      {!mobileOnly && <S.FilterTitle>{t('newsFeed.filter')}</S.FilterTitle>}

      <S.InputWrapper>
        <S.SearchIcon />
        <S.Input
          placeholder={t('newsFeed.authorSearch')}
          value={author}
          onChange={(event) => updateFilteredField('author', event.target.value)}
        />
      </S.InputWrapper>

      <S.InputWrapper>
        <S.SearchIcon />
        <S.Input
          placeholder={t('newsFeed.titleSearch')}
          value={title}
          onChange={(event) => updateFilteredField('title', event.target.value)}
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
            <Tag key={tag.id} title={tag.title} bgColor={tag.bgColor} removeTag={() => onTagClick(tag)} />
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
          updateFilteredField('dates', [dates?.length ? dates[0] : null, dates?.length ? dates[1] : null])
        }
      />

      <S.BtnWrapper>
        <S.Btn onClick={() => resetFilter()}>{t('newsFeed.reset')}</S.Btn>
        <S.Btn onClick={() => applyFilter()} type="primary">
          {t('newsFeed.apply')}
        </S.Btn>
      </S.BtnWrapper>
    </S.FilterWrapper>
  );
};

export const NewsFilter: React.FC<NewsFilterProps> = ({ news, newsTags, children }) => {
  const [filterFields, setFilterFields] = useState<{
    author: string;
    title: string;
    selectedTags: ITag[];
    dates: [AppDate | null, AppDate | null];
  }>({
    author: '',
    title: '',
    selectedTags: [],
    dates: [null, null],
  });
  const { author, title, selectedTags, dates } = filterFields;
  const [filteredNews, setFilteredNews] = useState<Post[]>(news);
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false);
  const { mobileOnly } = useResponsive();
  const { t } = useTranslation();

  const newsTagData = Object.values(newsTags || defaultTags);
  const selectedTagsIds = useMemo(() => selectedTags.map((item) => item.id), [selectedTags]);

  const onTagClick = useCallback(
    (tag: ITag) => {
      const isExist = selectedTagsIds.includes(tag.id);

      if (isExist) {
        setFilterFields({
          ...filterFields,
          selectedTags: selectedTags.filter((item) => item.id !== tag.id),
        });
      } else {
        setFilterFields({
          ...filterFields,
          selectedTags: [...selectedTags, tag],
        });
      }
    },
    [selectedTags, selectedTagsIds, filterFields],
  );

  const filterNews = useCallback(
    (isReset = false) => {
      let updatedNews = [...news];
      if ((author || title || dates[0] || selectedTags.length) && !isReset) {
        updatedNews = news.filter((post) => {
          const postAuthor = post.author.toLowerCase();
          const enteredAuthor = author.toLowerCase();
          const postTitle = post.title.toLowerCase();
          const enteredTitle = title.toLowerCase();
          const postTags = post.tags;
          const postDate = Dates.getDate(post.date);

          const fieldsValidators = [
            new AuthorValidator(postAuthor, enteredAuthor),
            new TitleValidator(postTitle, enteredTitle),
            new DatesValidator(postDate, dates),
            new TagsValidator(postTags, selectedTags),
          ];

          return fieldsValidators.map((validator) => validator.validate()).every((i) => i);
        });
      }
      setFilteredNews(
        updatedNews.sort((a, b) => {
          return b.date - a.date;
        }),
      );
    },
    [news, author, title, dates, selectedTags],
  );

  useEffect(() => {
    setFilteredNews(news);
    filterNews(false);
    // TODO AT-183
    // eslint-disable-next-line
  }, [news]);

  const handleClickApply = useCallback(() => {
    filterNews(false);

    if (mobileOnly) {
      setOverlayVisible(false);
    }
  }, [mobileOnly, filterNews]);

  const handleClickReset = useCallback(() => {
    setFilterFields({ author: '', title: '', dates: [null, null], selectedTags: [] });
    filterNews(true);

    if (mobileOnly) {
      setOverlayVisible(false);
    }
  }, [filterNews, setFilterFields, mobileOnly]);

  const updateFilteredField = (field: string, value: string | [AppDate | null, AppDate | null]) => {
    setFilterFields({ ...filterFields, [field]: value });
  };

  return (
    <>
      <S.TitleWrapper>
        {mobileOnly && (
          <Dropdown
            placement="bottomLeft"
            trigger={['click']}
            visible={overlayVisible}
            onVisibleChange={(visible) => setOverlayVisible(visible)}
            overlay={
              <Filter
                author={author}
                title={title}
                newsTagData={newsTagData}
                onTagClick={onTagClick}
                selectedTagsIds={selectedTagsIds}
                selectedTags={selectedTags}
                dates={dates}
                onApply={handleClickApply}
                onReset={handleClickReset}
                updateFilteredField={updateFilteredField}
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
            title={title}
            newsTagData={newsTagData}
            onTagClick={onTagClick}
            selectedTagsIds={selectedTagsIds}
            selectedTags={selectedTags}
            dates={dates}
            onApply={handleClickApply}
            onReset={handleClickReset}
            updateFilteredField={updateFilteredField}
          />
        )}
      </S.ContentWrapper>
    </>
  );
};
