import styled from 'styled-components';
import { Typography, Image as AntImage } from 'antd';
import lightTheme from '../../../styles/themes/light/lightTheme';

export const Header = styled.div`
  height: 5.5rem;
  margin-left: 1.5625rem;
  display: flex;
  align-items: center;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 21.25rem;
  position: relative;
  max-width: 42.5rem;
  box-shadow: ${(props) => props.theme.boxShadow.main};
  background: ${(props) => props.theme.colors.main.mainBackground};
  border-radius: ${(props) => props.theme.border.radius};
  transition: 0.3s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow.hover};
  }
`;

export const Image = styled(AntImage)`
  width: 100%;
  height: auto;
`;

export const Author = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.lg};
  font-weight: ${(props) => props.theme.commonFontWeight.bold};
  color: ${(props) => props.theme.colors.text.main};
  line-height: 1.5625rem;
`;

export const InfoWrapper = styled.div`
  padding: 1.25rem;

  @media only screen and ${lightTheme.media.xl} {
    padding: 1rem;
  }

  @media only screen and ${lightTheme.media.xxl} {
    padding: 1.85rem;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media only screen and ${lightTheme.media.md} {
    margin-bottom: 0.625rem;
  }

  @media only screen and ${lightTheme.media.xxl} {
    margin-bottom: 1.25rem;
  }
`;

export const Title = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  width: 80%;
  line-height: 1.375rem;

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${lightTheme.media.xxl} {
    font-size: 1rem;
  }
`;

export const DateTime = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  color: ${(props) => props.theme.colors.text.main};
  line-height: 1.25rem;
`;

export const Description = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${lightTheme.media.xxl} {
    font-size: 1rem;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 0 1.25rem 1.25rem;
`;
