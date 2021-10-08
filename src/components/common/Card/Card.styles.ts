import styled from 'styled-components';
import { Card as AntCard } from 'antd';
import { CardProps } from './Card';

export const Card = styled(AntCard)<CardProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);

  & .ant-card-head {
    flex-shrink: 0;
  }

  & .ant-card-body {
    flex-grow: 1;

    padding: ${(props) =>
      typeof props.padding === 'number'
        ? `${props.padding}px`
        : (Array.isArray(props.padding) && `${props.padding[0]}px ${props.padding[1]}px`) || props.padding};
  }
`;
