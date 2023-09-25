import styled, { css } from 'styled-components';
import { BaseAvatar } from '../BaseAvatar/BaseAvatar';
import { BaseSpace } from '../BaseSpace/BaseSpace';
import { BaseTypography } from '../BaseTypography/BaseTypography';
import { NotificationType } from './BaseNotification';
import { colorTypeFrom } from '@app/utils/utils';

interface SpacewWrapperProps {
  type: NotificationType;
}

export const NotificationIcon = styled(BaseAvatar)``;

export const Title = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const Description = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const SpaceWrapper = styled(BaseSpace)<SpacewWrapperProps>`
  background-color: ${({ theme }) => theme.background};

  & ${Title}, span[role='img'] {
    ${(props) =>
      props.type &&
      css`
        color: ${props.theme[colorTypeFrom(props.type)]};
      `}
  }

  & span[role='img'] {
    font-size: ${({ theme }) => theme.fontSizes.xxxxl};
  }
`;
