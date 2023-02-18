import React, { ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { RangeValue } from 'rc-picker/lib/interface.d';
import { BaseHashTag, IHashTag } from '@app/components/common/BaseHashTag/BaseHashTag';
import { AuthorValidator, TitleValidator, DatesValidator, TagsValidator } from '../Validator';
import { useResponsive } from '@app/hooks/useResponsive';
import { newsTags as defaultTags } from '@app/constants/newsTags';
import { AppDate, Dates } from '@app/constants/Dates';
import { Post } from '@app/api/news.api';
import * as S from './NewsFilter.styles';
import { BaseDropdown } from '@app/components/common/BaseDropdown/Dropdown';

interface NewsFilterProps {
  news: Post[];
  newsTags?: IHashTag[];
  children: ({ filteredNews }: { filteredNews: Post[] }) => ReactNode;
}

interface Filter {
  author: string;
  title: string;
  newsTagData: IHashTag[];
  onTagClick: (tag: IHashTag) => void;
  selectedTagsIds: Array<string>;
  selectedTags: IHashTag[];
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

  const items = useMemo(
    () =>
      newsTagData.map((tag, i) => ({
        key: `${i + 1}`,
        label: (
          <S.TagPopoverLine
            key={tag.id}
            onClick={(e) => {
              onTagClick(tag);
              e.stopPropagation();
            }}
          >
            <S.PopoverCheckbox checked={selectedTagsIds.includes(tag.id)} />
            <BaseHashTag title={tag.title} bgColor={tag.bgColor} />
          </S.TagPopoverLine>
        ),
      })),
    [newsTagData, onTagClick, selectedTagsIds],
  );

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

      <BaseDropdown placement="bottom" trigger={['click']} menu={{ items }}>
        <S.AddTagWrapper>
          <S.PlusIcon />
          <S.AddTagText>{t('newsFeed.tag')}</S.AddTagText>
        </S.AddTagWrapper>
      </BaseDropdown>

      {!!selectedTags.length && (
        <S.TagsWrapper>
          {selectedTags.map((tag) => (
            <BaseHashTag key={tag.id} title={tag.title} bgColor={tag.bgColor} removeTag={() => onTagClick(tag)} />
          ))}
        </S.TagsWrapper>
      )}

      <S.DateLabels>
        <S.DateLabel>{t('newsFeed.from')}</S.DateLabel>
        <S.DateLabel>{t('newsFeed.to')}</S.DateLabel>
      </S.DateLabels>

      <S.RangePicker
        popupClassName="range-picker"
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
    selectedTags: IHashTag[];
    dates: [AppDate | null, AppDate | null];
  }>({
    author: '',
    title: '',
    selectedTags: [],
    dates: [null, null],
  });
  const { author, title, selectedTags, dates } = filterFields;
  const [filteredNews, setFilteredNews] = useState<Post[]>(news);
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const { mobileOnly } = useResponsive();
  const { t } = useTranslation();

  const newsTagData = Object.values(newsTags || defaultTags);
  const selectedTagsIds = useMemo(() => selectedTags.map((item) => item.id), [selectedTags]);

  const onTagClick = useCallback(
    (tag: IHashTag) => {
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
      setOverlayOpen(false);
    }
  }, [mobileOnly, filterNews]);

  const handleClickReset = useCallback(() => {
    setFilterFields({ author: '', title: '', dates: [null, null], selectedTags: [] });
    filterNews(true);

    if (mobileOnly) {
      setOverlayOpen(false);
    }
  }, [filterNews, setFilterFields, mobileOnly]);

  const updateFilteredField = (field: string, value: string | [AppDate | null, AppDate | null]) => {
    setFilterFields({ ...filterFields, [field]: value });
  };

  return (
    <>
      <S.TitleWrapper>
        {mobileOnly && (
          <S.FilterPopover
            trigger="click"
            open={overlayOpen}
            onOpenChange={(open) => setOverlayOpen(open)}
            content={
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
          </S.FilterPopover>
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
