import styled from 'styled-components';
import { default as AntIcon } from '@ant-design/icons';

interface StatisticsProps {
  color: string;
}

export const CardWrapper = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const Line = styled.div<StatisticsProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 7px;
  height: 100%;
  border-radius: 7px 0 0 7px;
  z-index: 2;

  background-color: ${(props) => props.color};
`;

export const Icon = styled(AntIcon)<StatisticsProps>`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;

  color: ${(props) => props.color};
`;
