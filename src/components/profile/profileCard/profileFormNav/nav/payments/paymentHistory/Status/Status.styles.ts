import styled from 'styled-components';
import { Tag } from 'antd';
import { media } from '@app/styles/themes/constants';

export const StatusTag = styled(Tag)`
  padding: 0.375rem 0;
  min-width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  @media only screen and ${media.md} {
    min-width: 6.5rem;
  }
`;
