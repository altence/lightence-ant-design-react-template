import { Rate, Row, Typography } from 'antd';
import styled from 'styled-components';

export const DoctorRow = styled(Row)`
  margin: 0 0.5rem;
`;

export const Title = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xxs};

  font-weight: ${(props) => props.theme.commonFontWeight.medium};

  color: ${(props) => props.theme.colors.main.primary};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }

  @media only screen and ${(props) => props.theme.media.xxl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;

export const Text = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-weight: ${(props) => props.theme.commonFontWeight.semibold};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }

  @media only screen and ${(props) => props.theme.media.xxl} {
    font-size: ${(props) => props.theme.commonFontSizes.lg};
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;

  border-radius: ${(props) => props.theme.border.radius};

  & > div {
    display: block;
  }
`;

export const Rating = styled(Rate)`
  display: flex;
  font-size: ${(props) => props.theme.commonFontSizes.xxs};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.lg};
  }
`;
