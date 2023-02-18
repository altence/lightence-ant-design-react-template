import styled from 'styled-components';
import { defaultPaddings } from '@app/constants/defaultPaddings';
import { media } from '@app/styles/themes/constants';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';

interface ContentWrapperProps {
  isEmptyHistory: boolean;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${(props) =>
    !props.isEmptyHistory &&
    `margin: 0 -${defaultPaddings.mobile[1]}px -${defaultPaddings.mobile[0]}px -${defaultPaddings.mobile[1]}px`};

  @media only screen and ${media.md} {
    ${(props) =>
      !props.isEmptyHistory &&
      `margin: 0 -${defaultPaddings.tablet[1]}px -${defaultPaddings.tablet[0]}px -${defaultPaddings.tablet[1]}px`};
  }

  @media only screen and ${media.xl} {
    margin: 0;
  }
`;

export const Text = styled(BaseTypography.Text)`
  @media only screen and ${media.md} {
    font-size: 1rem;
  }
`;
