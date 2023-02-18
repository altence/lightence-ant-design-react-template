import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import styled from 'styled-components';

export const CountriesSpace = styled(BaseSpace)`
  width: 100%;

  & > .ant-space-item:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
