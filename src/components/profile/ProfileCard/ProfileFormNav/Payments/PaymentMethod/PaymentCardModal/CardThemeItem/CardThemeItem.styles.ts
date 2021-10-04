import styled from 'styled-components';

interface BackgroundWrapperProps {
  isActive: boolean;
}

interface ThemeProps {
  background: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BackgroundWrapper = styled.div<BackgroundWrapperProps>`
  margin: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: ${(props) => props.theme.border.radius};

  ${(props) => props.isActive && `background: ${props.theme.colors.main.angularGradient}`};
`;

export const Theme = styled.div<ThemeProps>`
  width: 3.125rem;
  height: 3.125rem;
  margin: 0.2rem;
  border: 5px solid ${(props) => props.theme.colors.text.secondary};

  border-radius: ${(props) => props.theme.border.radius};

  background: ${(props) => (props.background.includes('http') ? `url(${props.background})` : props.background)};
  background-size: contain;
`;
