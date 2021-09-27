import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  & > span,
  & .ant-form-item {
    margin-bottom: 0;
  }
`;
