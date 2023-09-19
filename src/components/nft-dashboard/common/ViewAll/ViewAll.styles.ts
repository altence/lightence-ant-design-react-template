import styled, { css } from 'styled-components';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';

interface ViewAllInternalProps {
  $bordered: boolean;
}

export const ViewAllBtn = styled(BaseButton)<ViewAllInternalProps>`
  &.ant-btn {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.textMain};

  ${(props) =>
    props.$bordered &&
    css`
      border-bottom: 0.2px solid ${props.theme.nft.border};
    `}
`;
