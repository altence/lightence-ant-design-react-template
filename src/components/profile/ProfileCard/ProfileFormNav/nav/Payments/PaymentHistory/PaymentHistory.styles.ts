import { Typography } from 'antd';
import styled from 'styled-components';
import { defaultPaddings } from 'constants/defaultPaddings';

interface ContentWrapperProps {
  isEmptyHistory: boolean;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${(props) =>
    !props.isEmptyHistory &&
    `margin: 0 -${defaultPaddings.mobile[1]}px -${defaultPaddings.mobile[0]}px -${defaultPaddings.mobile[1]}px`};

  @media only screen and ${(props) => props.theme.media.md} {
    ${(props) =>
      !props.isEmptyHistory &&
      `margin: 0 -${defaultPaddings.tablet[1]}px -${defaultPaddings.tablet[0]}px -${defaultPaddings.tablet[1]}px`};
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    ${(props) =>
      !props.isEmptyHistory &&
      `margin: 0 -${defaultPaddings.desktop[1]}px -${defaultPaddings.desktop[0]}px -${defaultPaddings.desktop[1]}px`};
  }
`;

export const Text = styled(Typography.Text)`
  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 1rem;
  }
`;
