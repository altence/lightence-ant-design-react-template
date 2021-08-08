import styled from 'styled-components';
import { Card as AntCard } from 'antd';
import { CardProps } from './Card';

export const Card = styled(AntCard)<CardProps>`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  /* overflow: hidden; */

  height: ${(props) =>
    (props.$small && '9.375rem') || (props.$medium && '23.5rem') || (props.$large && '28.5rem') || '23.5rem'};

  & .ant-card-head {
    flex-shrink: 0;
  }

  & .ant-card-body {
    flex-grow: 1;

    padding: ${(props) => props.padding};
  }
`;
