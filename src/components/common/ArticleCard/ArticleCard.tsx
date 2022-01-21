import React from 'react';
import { Dates } from '../../../constants/Dates';
import { Avatar } from 'antd';
import { Tag, ITag } from '../Tag/Tag';
import * as S from './ArticleCard.styles';
import { useTheme } from 'styled-components';

interface ArticleCardProps {
  author?: React.ReactNode;
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
  tags,
  className = 'article-card',
}) => {
  const theme = useTheme();

  return (
    <S.Wrapper className={className}>
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
            <Tag key={tag.bgColor} title={tag.title} bgColor={theme.colors.main[tag.bgColor]} />
          ))}
        </S.TagsWrapper>
      )}
    </S.Wrapper>
  );
};
