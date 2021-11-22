import styled from 'styled-components';
import theme from 'styles/theme';
import { Avatar as AntdAvatar } from 'antd';

export const Avatar = styled(AntdAvatar)`
  margin-bottom: 1rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Time = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${theme.media.xs} {
    margin-bottom: 0.625rem;
    line-height: 1.5625rem;
    font-size: ${(props) => props.theme.commonFontSizes.lg};
    font-weight: ${(props) => props.theme.commonFontWeight.bold};
  }

  @media only screen and ${theme.media.md} {
    margin-bottom: 1rem;
    line-height: 2.125rem;
    font-size: ${(props) => props.theme.commonFontSizes.xxxl};
    font-weight: ${(props) => props.theme.commonFontWeight.extraBold};
  }

  @media only screen and ${theme.media.xl} {
    margin-bottom: 1rem;
    line-height: 2.125rem;
    font-size: ${(props) => props.theme.commonFontSizes.xxxl};
    font-weight: ${(props) => props.theme.commonFontWeight.extraBold};
  }
`;

export const Date = styled.div`
  margin-bottom: 2.5rem;
  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${theme.media.xs} {
    margin-bottom: 3.4375rem;
    line-height: 1.25rem;
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  }

  @media only screen and ${theme.media.md} {
    margin-bottom: 2.5rem;
    line-height: 1.5rem;
    font-size: ${(props) => props.theme.commonFontSizes.xxl};
    font-weight: ${(props) => props.theme.commonFontWeight.bold};
  }

  @media only screen and ${theme.media.xl} {
    margin-bottom: 2.5rem;
    line-height: 1.5rem;
    font-size: ${(props) => props.theme.commonFontSizes.xxl};
    font-weight: ${(props) => props.theme.commonFontWeight.bold};
  }
`;

export const Name = styled.div`
  margin-bottom: 1.5625rem;
  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${theme.media.xs} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  }

  @media only screen and ${theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  }

  @media only screen and ${theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  }
`;
