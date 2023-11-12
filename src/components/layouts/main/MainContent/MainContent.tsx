import styled, { css } from 'styled-components';
import { BaseLayout } from '@app/components/common/BaseLayout/BaseLayout';
import { media } from '@app/utils/utils';

interface HeaderProps {
  $isTwoColumnsLayout: boolean;
}

export default styled(BaseLayout.Content)<HeaderProps>`
  padding: ${({ theme }) => `${theme.paddings.xxs} ${theme.paddings.sm}`};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (${media('md')}) {
    padding: ${({ theme }) => `${theme.paddings.md} ${theme.paddings.xl}`};
  }

  @media only screen and (${media('xl')}) {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        padding: 0;
      `}
  }
`;
