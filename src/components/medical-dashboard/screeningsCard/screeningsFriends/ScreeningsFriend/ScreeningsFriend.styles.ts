import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { media } from '@app/utils/utils';
import styled from 'styled-components';

interface ScreeningsRowProps {
  $isActive: boolean;
}

interface PercentageProps {
  $isDowngrade: boolean;
}

interface Importance {
  $isPrimary: boolean;
  $isSecondary: boolean;
}

export const ScreeningsRow = styled(BaseRow)<ScreeningsRowProps>`
  cursor: pointer;
  transition: all 0.3s ease;

  .ant-typography {
    font-weight: ${(props) => (props.$isActive ? props.theme.fontWeights.bold : props.theme.fontWeights.regular)};
  }
`;

export const Avatar = styled(BaseAvatar)<Importance>`
  position: relative;
  border: 2px solid ${(props) => (props.$isPrimary && props.theme.primary) || (props.$isSecondary && props.theme.error)};
`;

export const Name = styled(BaseTypography.Text)<Importance>`
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${(props) => (props.$isPrimary && props.theme.primary) || (props.$isSecondary && props.theme.error)};

  @media only screen and (${media('xl')}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const Percentage = styled(BaseTypography.Text)<PercentageProps>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${(props) => (props.$isDowngrade ? props.theme.error : props.theme.success)};

  @media only screen and (${media('xl')}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
