import { hexToRGB } from 'helpers/hexToRGB';
import styled from 'styled-components';

interface ColorWrapperProps {
  color: string;
  isActive: boolean;
}

export const ColorWrapper = styled.div<ColorWrapperProps>`
  cursor: pointer;
  width: 3.25rem;
  height: 1.75rem;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  border-radius: ${(props) => props.theme.border.radius};

  color: ${(props) =>
    (props.isActive && hexToRGB(props.theme.colors.text.secondary, 1)) ||
    hexToRGB(props.theme.colors.text.secondary, 0)};

  ${(props) => props.color && `background-color: ${props.color}`};
`;
