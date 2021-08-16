import styled from 'styled-components';
import { default as AntIcon } from '@ant-design/icons';
import { media } from '../../../styles/theme';

interface StatisticsProps {
  color: string;
}

export const CardWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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

  @media only screen and ${media.md} {
    font-size: 0.8rem;
  }

  @media only screen and ${media.xl} {
    font-size: 1.5rem;
  }
`;
