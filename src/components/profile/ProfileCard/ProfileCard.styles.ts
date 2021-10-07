import styled from 'styled-components';
import { Button } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 2rem;

  & > div {
    &:first-of-type {
      margin-bottom: 2rem;
    }
  }

  @media only screen and ${(props) => props.theme.media.md} {
    flex-direction: row;

    & > div {
      &:first-of-type {
        margin-bottom: 0;
      }
    }
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    flex-direction: column;

    & > div {
      width: unset;

      &:first-of-type {
        margin-bottom: 3rem;
      }
    }
  }
`;

export const Btn = styled(Button)`
  color: inherit;
  font-size: 1rem;
  font-weight: 600;
  padding: 0;
  height: unset;
`;
