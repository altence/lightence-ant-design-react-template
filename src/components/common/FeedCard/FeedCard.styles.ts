import styled from 'styled-components';
import { Button, Typography, Image as AntImage, Input } from 'antd';
import theme from '../../../styles/theme';

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

export const BtnMore = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 3rem;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 2;
  transition: all 0.3s ease;
  pointer-events: none;

  color: ${(props) => props.theme.colors.text.secondary};

  @media only screen and ${theme.media.xxl} {
    padding: 0.875rem 4.875rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.main.mainBackground};
  }
`;

export const Keywords = styled(Input)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  width: 50%;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;

  color: ${(props) => props.theme.colors.text.secondary};

  &::placeholder {
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  filter: drop-shadow(0 4px 40px rgba(0, 0, 0, 0.07));
  background: white;

  border-radius: ${(props) => props.theme.border.radius};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;

    border-radius: ${(props) => props.theme.border.radius};

    background: ${(props) => props.theme.colors.main.primaryGradient};
  }

  &:hover {
    &::after {
      opacity: 0.7;
    }

    & ${BtnMore} {
      pointer-events: all;
      opacity: 1;
    }

    & ${Keywords} {
      opacity: 1;
    }
  }
`;

export const Image = styled(AntImage)`
  width: 100%;
  height: 100%;
  max-height: 22.375rem;
`;

export const Author = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.lg};
  font-weight: ${(props) => props.theme.commonFontWeight.bold};
  color: ${(props) => props.theme.colors.text.main};
  line-height: 1.5625rem;
`;

export const InfoWrapper = styled.div`
  padding: 1.25rem;

  @media only screen and ${theme.media.xl} {
    padding: 1rem;
  }

  @media only screen and ${theme.media.xxl} {
    padding: 1.85rem;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media only screen and ${theme.media.md} {
    margin-bottom: 0.625rem;
  }

  @media only screen and ${theme.media.xxl} {
    margin-bottom: 1.25rem;
  }
`;

export const Title = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  width: 80%;
  line-height: 1.375rem;

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${theme.media.xxl} {
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

  @media only screen and ${theme.media.xxl} {
    font-size: 1rem;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 0 1.25rem 1.25rem;
`;
