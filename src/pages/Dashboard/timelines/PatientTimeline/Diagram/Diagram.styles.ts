import styled from 'styled-components';
import { Divider as AntDivider } from 'antd';

interface DiagramProps {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  text-align: center;
`;

export const IconWrapper = styled.div`
  font-size: 1.5rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const DiagramItem = styled.div<DiagramProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: ${(props) => (props.isActive && props.theme.colors.primary) || props.theme.colors.basicLight};

  ${(props) =>
    props.isActive &&
    `& ${IconWrapper} {
    color: ${props.theme.colors.secondary};
  }`}
`;

export const Divider = styled(AntDivider)`
  top: 0;
  font-size: 3.75rem;
`;
