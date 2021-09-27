import { Button } from 'antd';
import styled from 'styled-components';

export const LinkButton = styled(Button)`
  & > span {
    font-size: 1rem;
    text-decoration: underline;
  }
`;
