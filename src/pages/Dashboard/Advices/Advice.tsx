import { Button, Image, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { Advice as AdviceProps } from '../../../constants/advices';

export const Advice: React.FC<AdviceProps> = ({ imgUrl, title, date, description }) => {
  return (
    <Wrapper>
      <ButtonStyled>More details</ButtonStyled>
      <ImageWrapper>
        <Image width={370} src={imgUrl} />
      </ImageWrapper>
      <Article>
        <Header>
          <Title>{title}</Title>
          <Date>{date.toLocaleDateString()}</Date>
        </Header>
        <Text>{description}</Text>
      </Article>
    </Wrapper>
  );
};

const ButtonStyled = styled(Button)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};
  padding: 0.8rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  opacity: 0;
  transition: all 0.3 ease;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fbfbfb;
  border-radius: 7px;
  margin-right: 1.25rem;

  &:nth-last-of-type(1) {
    margin-right: 0;
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${(props) => props.theme.colors.gradient};
    border-radius: 7px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover::after,
  &:hover ${ButtonStyled} {
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  & .ant-image-preview-img {
    margin: 0 auto;
  }

  & img {
    display: inline;
  }
`;

const Article = styled.div`
  padding: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

const Title = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.dark};
  font-size: 1rem;
  font-weight: 500;
`;

const Date = styled(Typography.Text)`
  font-size: 0.75rem;
`;

const Text = styled(Typography.Text)`
  font-size: 1rem;
`;
