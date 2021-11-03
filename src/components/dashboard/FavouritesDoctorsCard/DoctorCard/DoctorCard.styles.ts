import styled from 'styled-components';
import { Avatar as AntAvatar, Typography, Rate } from 'antd';
import theme from 'styles/theme';
import { hexToRGB } from 'utils/utils';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 7rem;
  padding: 0.375rem;
  max-width: 7.5rem;
  transition: all 0.3s ease;

  border-radius: ${(props) => props.theme.border.radius};

  background-color: ${(props) => props.theme.colors.main.mainBackground};

  @media only screen and ${theme.media.xxl} {
    max-width: 9.5rem;
  }

  &:hover {
    background-color: ${(props) => hexToRGB(props.theme.colors.main.primary, 0.7)};
  }
`;

export const Title = styled(Typography.Text)`
  display: block;
  font-size: 0.625rem;

  color: ${(props) => props.theme.colors.main.primary};

  @media only screen and ${theme.media.xxl} {
    font-size: 0.75rem;
  }
`;

export const Text = styled(Typography.Text)`
  display: block;
  font-size: 0.625rem;

  @media only screen and ${theme.media.xxl} {
    font-size: 1rem;
  }
`;

export const Avatar = styled(AntAvatar)`
  display: block;
  margin: 0 auto;
  margin-bottom: 0.375rem;
  width: 100%;
  height: 100%;
  max-width: 6.25rem;

  @media only screen and ${theme.media.xl} {
    margin-bottom: 0.5rem;
  }

  @media only screen and ${theme.media.xxl} {
    max-width: 8.75rem;
    margin-bottom: 0.625rem;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.125rem;

  @media only screen and ${theme.media.xl} {
    margin-bottom: 0.5rem;
  }

  @media only screen and ${theme.media.xxl} {
    margin-bottom: 1rem;
  }

  & ${Text} {
    margin-left: 0.3rem;

    @media only screen and ${theme.media.xxl} {
      margin-left: 0.5rem;
    }
  }
`;

export const Rating = styled(Rate)`
  @media only screen and ${theme.media.xxl} {
    font-size: 1rem;
  }

  & .ant-rate-star:not(:last-child) {
    margin-right: 0.25rem;

    @media only screen and ${theme.media.xxl} {
      margin-left: 0.3rem;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and ${theme.media.xl} {
    & ${Title} {
      margin-bottom: 0.2rem;
    }

    & ${Text} {
      margin-bottom: 0.4rem;
    }
  }

  @media only screen and ${theme.media.xxl} {
    & ${Title} {
      margin-bottom: 0.4rem;
    }

    & ${Text} {
      margin-bottom: 0.625rem;
    }
  }
`;

export const VisitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and ${theme.media.xxl} {
    & ${Text} {
      font-size: 0.75rem;
      margin-bottom: 0;
      margin-left: 0.1rem;
    }
  }
`;
