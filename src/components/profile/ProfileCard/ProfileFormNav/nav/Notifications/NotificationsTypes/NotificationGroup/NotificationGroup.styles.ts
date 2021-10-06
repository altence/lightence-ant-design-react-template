import styled from 'styled-components';
import { hexToRGB } from 'helpers/hexToRGB';

const colStyles = {
  height: '75px',
  minWidth: '50px',
  display: 'flex',
  alignItems: 'center',
  padding: '0.3125rem',
  fontWeight: 600,
};

export const Col = styled.div`
  ${colStyles};

  border-bottom: ${(props) => `1px solid ${hexToRGB(props.theme.colors.main.primary, 0.3)}`};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }

  .ant-checkbox-wrapper {
    color: inherit;
    font: inherit;

    & > span {
      padding: 0;
    }

    & > .ant-checkbox > .ant-checkbox-inner {
      border-radius: 3px;

      border-color: ${(props) => props.theme.colors.main.primary};
    }
  }
`;

export const HeaderCol = styled(Col)`
  background: #f2f6fa;
  font-weight: 500;

  border-top: ${(props) => `1px solid ${hexToRGB(props.theme.colors.main.primary, 0.3)}`};

  color: ${(props) => props.theme.colors.main.primary};

  & .ant-checkbox-wrapper {
    flex-direction: column;
    align-items: unset;
    padding-top: 1.25rem;

    & > span {
      padding: 0.3125rem 0;
    }
  }
`;
