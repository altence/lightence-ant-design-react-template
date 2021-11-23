import styled from 'styled-components';

export const Title = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.xxl};
  font-weight: ${(props) => props.theme.commonFontWeight.bold};
  color: ${(props) => props.theme.colors.text.secondary};
  line-height: 1.9375rem;
`;

export const TablesWrapper = styled.div`
  background: ${(props) => props.theme.colors.main.mainBackground};
  padding: 1.875rem 1.25rem;
  border-radius: ${(props) => props.theme.border.radius};
  filter: drop-shadow(0 4px 40px rgba(0, 0, 0, 0.07));
  margin-top: 1.875rem;
`;
