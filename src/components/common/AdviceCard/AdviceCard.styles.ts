import styled from 'styled-components';
import { Typography, Image as AntImage, Button } from 'antd';
import theme from '../../../styles/theme';

export const BtnMore = styled(Button)`
  position: absolute;
  top: 2.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 3rem;
  opacity: 0;
  z-index: 2;
  transition: all 0.3s ease;
  pointer-events: none;
  border: ${(props) => `1px solid ${props.theme.colors.main.mainBackground}`};
  color: ${(props) => props.theme.colors.text.secondary};

  @media only screen and ${theme.media.xxl} {
    padding: 0.875rem 4.875rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.main.mainBackground};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  background: #fbfbfb;
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
  }
`;

export const Image = styled(AntImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.theme.border.radius};

  @media only screen and ${theme.media.xs} {
    max-height: 12.1875rem;
  }

  @media only screen and ${theme.media.md} {
    max-height: 8.375rem;
  }
`;

export const InfoWrapper = styled.div`
  @media only screen and ${theme.media.xs} {
    padding: 1.25rem 1rem 1.875rem 1rem;
  }

  @media only screen and ${theme.media.md} {
    padding: 1rem 1rem 1rem 1rem;
  }

  @media only screen and ${theme.media.xl} {
    padding: 1rem 1rem 1.875rem 1.25rem;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and ${theme.media.xs} {
    margin-bottom: 0.75rem;
  }

  @media only screen and ${theme.media.md} {
    margin-bottom: 0.625rem;
  }
`;

export const Title = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  width: 80%;
  line-height: 1.375rem;

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }

  @media only screen and ${theme.media.xxl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
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
`;
