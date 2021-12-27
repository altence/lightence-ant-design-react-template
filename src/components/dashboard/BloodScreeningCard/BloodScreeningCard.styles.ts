import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActiveItem = styled.div`
  background: #ecf6ff;
  height: 3.125rem;
  border-radius: ${(props) => props.theme.border.radius};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.main.primary};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
`;
