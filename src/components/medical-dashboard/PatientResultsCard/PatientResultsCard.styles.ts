import styled from 'styled-components';
import { CalendarOutlined } from '@ant-design/icons';
import { media } from '@app/utils/utils';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';

interface IconProps {
  isActive: boolean;
}

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CalendarIcon = styled(CalendarOutlined)`
  color: ${({ theme }) => theme.primary};

  @media only screen and (${media('md')}) {
    color: ${({ theme }) => theme.textMain};
  }
`;

export const MobileTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${({ theme }) => theme.heights.xs};
  align-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const Text = styled(BaseTypography.Text)`
  margin-left: 0.5rem;
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.textMain};

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const Description = styled(BaseTypography.Text)`
  margin-top: 0.625rem;
  font-size: ${({ theme }) => theme.fontSizes.xxs};

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const IconWrapper = styled.div<IconProps>`
  height: ${({ theme }) => theme.heights.xs};
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isActive ? props.theme.primary : props.theme.timelineBackground)};
  color: ${(props) => (props.isActive ? props.theme.textSecondary : props.theme.primary)};
  font-size: 1.15rem;
`;
