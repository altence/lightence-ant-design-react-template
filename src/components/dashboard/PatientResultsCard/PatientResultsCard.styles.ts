import styled from 'styled-components';
import { Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

interface IconProps {
  isActive: boolean;
}

export const TitleWrapper = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
`;

export const CalendarIcon = styled(CalendarOutlined)`
  @media only screen and ${(props) => props.theme.media.xs} {
    color: ${(props) => props.theme.colors.main.primary};
  }

  @media only screen and ${(props) => props.theme.media.md} {
    color: ${(props) => props.theme.colors.text.main};
  }
`;

export const MobileTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2rem;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;

export const Text = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  margin-left: 0.5rem;

  @media only screen and ${(props) => props.theme.media.xs} {
    font-size: ${(props) => props.theme.commonFontSizes.xxs};
    color: ${(props) => props.theme.colors.main.primary};
  }

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    color: ${(props) => props.theme.colors.text.main};
  }
`;

export const Description = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  margin-top: 0.625rem;

  @media only screen and ${(props) => props.theme.media.xs} {
    font-size: ${(props) => props.theme.commonFontSizes.xxs};
  }

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }
`;

export const IconWrapper = styled.div<IconProps>`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.main.primary : props.theme.colors.main.secondaryBackground};
  color: ${(props) => (props.isActive ? props.theme.colors.text.secondary : props.theme.colors.main.primary)};
  font-size: 1.15rem;
`;
