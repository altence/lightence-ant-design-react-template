import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dates } from '../../../constants/Dates';
import { Avatar } from 'antd';
import { Tag, ITag } from '../Tag/Tag';
import * as S from './ArticleCard.styles';

interface ArticleCardProps {
  author?: React.ReactNode;
  keywords?: boolean;
  imgUrl: string;
  title: string;
  date: number;
  description: string;
  avatar?: string;
  tags?: ITag[];
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  imgUrl,
  title,
  date,
  description,
  author,
  avatar,
  keywords,
  tags,
  className = 'article-card',
}) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper className={className}>
      {keywords ? (
        <S.Keywords placeholder={t('common.keywords')} />
      ) : (
        <S.BtnMore type="ghost">{t('common.moreDetails')}</S.BtnMore>
      )}
      <S.Header>
        {!!avatar && <Avatar src={avatar} size={43} />}
        <S.AuthorWrapper>
          {author && <S.Author>{author}</S.Author>}
          <S.DateTime>{Dates.format(date, 'L')}</S.DateTime>
        </S.AuthorWrapper>
      </S.Header>
      <S.Image src={imgUrl} preview={false} />
      <S.InfoWrapper>
        <S.InfoHeader>
          <S.Title>{title}</S.Title>
        </S.InfoHeader>
        <S.Description>{description}</S.Description>
      </S.InfoWrapper>

      {!!tags?.length && (
        <S.TagsWrapper>
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.title} bgColor={tag.bgColor} />
          ))}
        </S.TagsWrapper>
      )}
    </S.Wrapper>
  );
};
