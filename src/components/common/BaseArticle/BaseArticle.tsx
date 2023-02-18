import React from 'react';
import { Dates } from '@app/constants/Dates';
import { BaseHashTag, IHashTag } from '../BaseHashTag/BaseHashTag';
import { BaseImage } from '../BaseImage/BaseImage';
import { BaseAvatar } from '../BaseAvatar/BaseAvatar';
import * as S from './BaseArticle.styles';

export interface BaseArticleProps {
  author?: React.ReactNode;
  imgUrl: string;
  title: string;
  date: number;
  description: string;
  avatar?: string;
  tags?: IHashTag[];
  className?: string;
}

export const BaseArticle: React.FC<BaseArticleProps> = ({
  imgUrl,
  title,
  date,
  description,
  author,
  avatar,
  tags,
  className,
}) => {
  return (
    <S.Wrapper className={className}>
      <S.Header>
        {!!avatar && <BaseAvatar src={avatar} alt="author" size={43} />}
        <S.AuthorWrapper>
          {author && <S.Author>{author}</S.Author>}
          <S.DateTime>{Dates.format(date, 'L')}</S.DateTime>
        </S.AuthorWrapper>
      </S.Header>
      <BaseImage src={imgUrl} alt="article" preview={false} />
      <S.InfoWrapper>
        <S.InfoHeader>
          <S.Title>{title}</S.Title>
        </S.InfoHeader>
        <S.Description>{description}</S.Description>
      </S.InfoWrapper>

      {!!tags?.length && (
        <S.TagsWrapper>
          {tags.map((tag) => (
            <BaseHashTag key={tag.bgColor} title={tag.title} bgColor={tag.bgColor} />
          ))}
        </S.TagsWrapper>
      )}
    </S.Wrapper>
  );
};
