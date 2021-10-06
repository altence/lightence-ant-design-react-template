import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    margin: 0;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    width: 50%;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  & > span,
  & .ant-form-item {
    margin-bottom: 0;
  }
`;
