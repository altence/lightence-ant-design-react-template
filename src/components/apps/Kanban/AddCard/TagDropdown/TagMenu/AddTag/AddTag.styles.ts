import styled from 'styled-components';

interface ColorWrapperProps {
  color: string;
  isActive: boolean;
}

export const ColorWrapper = styled.div<ColorWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.25rem;
  height: 1.75rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  border: ${(props) => `1px solid ${props.theme.colors.border.main}`};

  border-radius: ${(props) => props.theme.border.radius};

  color: ${(props) =>
    (props.isActive &&
      (props.color === props.theme.commonColors.white
        ? props.theme.colors.text.main
        : props.theme.colors.text.secondary)) ||
    'transparent'};

  background-color: ${(props) => props.color};
`;
