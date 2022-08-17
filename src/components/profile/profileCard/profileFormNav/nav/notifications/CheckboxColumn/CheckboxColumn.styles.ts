import styled from 'styled-components';
import { media } from '@app/styles/themes/constants';

const colStyles = {
  height: '75px',
  minWidth: '50px',
  fontWeight: 600,
  padding: '0.3125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Col = styled.div`
  ${colStyles};

  border-bottom: 1px solid rgba(var(--primary-rgb-color), 0.3);

  @media only screen and ${media.md} {
    justify-content: unset;
    font-size: 1rem;
    padding: 0.5rem;
  }

  @media only screen and ${media.xl} {
    padding: 0.75rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  & .ant-checkbox-wrapper {
    color: inherit;
    font: inherit;

    & > .ant-checkbox > .ant-checkbox-inner {
      border-radius: 3px;

      border-color: var(--primary-color);
    }
  }

  &:last-of-type {
    ${Col} {
      justify-content: unset;
    }
  }
`;

export const HeaderCol = styled(Col)`
  background: var(--secondary-background-color);

  border-top: 1px solid rgba(var(--primary-rgb-color), 0.3);

  color: var(--primary-color);

  & .ant-checkbox-wrapper {
    flex-wrap: wrap;
    row-gap: 0.5rem;
    justify-content: center;
  }
`;
