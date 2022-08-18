import styled, { css } from 'styled-components';
import { Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { FONT_SIZE, media } from '@app/styles/themes/constants';

interface IconProps {
  isActive: boolean;
}

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CalendarIcon = styled(CalendarOutlined)`
  color: var(--primary-color);

  @media only screen and ${media.md} {
    color: var(--text-main-color);
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
  font-size: ${FONT_SIZE.xs};
`;

export const Text = styled(Typography.Text)`
  margin-left: 0.5rem;
  line-height: 1;
  font-size: ${FONT_SIZE.xxs};
  color: var(--text-main-color);

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.xs};
  }
`;

export const Description = styled(Typography.Text)`
  margin-top: 0.625rem;
  font-size: ${FONT_SIZE.xxs};

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.xs};
  }
`;

export const IconWrapper = styled.div<IconProps>`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isActive
      ? css`
          background-color: var(--primary-color);
          color: var(--text-secondary-color);
        `
      : css`
          background-color: var(--timeline-background-color);
          color: var(--primary-color);
        `}
  font-size: 1.15rem;
`;
