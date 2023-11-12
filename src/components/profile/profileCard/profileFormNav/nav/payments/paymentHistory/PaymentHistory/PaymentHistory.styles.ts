import styled, { css } from 'styled-components';
import { defaultPaddings } from '@app/components/common/BaseCard/BaseCard';
import { media, normalizeProp } from '@app/utils/utils';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';

interface ContentWrapperProps {
  isEmptyHistory: boolean;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${(props) =>
    !props.isEmptyHistory &&
    css`
      margin: ${normalizeProp([0, -defaultPaddings.xs[1], -defaultPaddings.xs[0], -defaultPaddings.xs[1]])};
    `}

  @media only screen and (${media('md')}) {
    ${(props) =>
      !props.isEmptyHistory &&
      css`
        margin: ${normalizeProp([0, -defaultPaddings.md[1], -defaultPaddings.md[0], -defaultPaddings.md[1]])};
      `}
  }

  @media only screen and (${media('xl')}) {
    margin: 0;
  }
`;

export const Text = styled(BaseTypography.Text)`
  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
