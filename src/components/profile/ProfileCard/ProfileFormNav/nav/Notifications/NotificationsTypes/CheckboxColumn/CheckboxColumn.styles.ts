import styled from 'styled-components';
import { hexToRGB } from 'helpers/hexToRGB';

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

  border-bottom: ${(props) => `1px solid ${hexToRGB(props.theme.colors.main.primary, 0.3)}`};

  @media only screen and ${(props) => props.theme.media.md} {
    justify-content: unset;
    font-size: 1rem;
    padding: 0.5rem;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
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

      border-color: ${(props) => props.theme.colors.main.primary};
    }
  }

  &:last-of-type {
    ${Col} {
      justify-content: unset;
    }
  }
`;

export const HeaderCol = styled(Col)`
  background: #f2f6fa;
  font-weight: 500;

  border-top: ${(props) => `1px solid ${hexToRGB(props.theme.colors.main.primary, 0.3)}`};

  color: ${(props) => props.theme.colors.main.primary};

  & .ant-checkbox-wrapper {
    flex-wrap: wrap;
    row-gap: 0.5rem;
    justify-content: center;
  }
`;
