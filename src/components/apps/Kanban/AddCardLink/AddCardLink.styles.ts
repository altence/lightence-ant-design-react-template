import styled from 'styled-components';

export const AddCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.75rem;
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.commonColors.skyblue}`};
  border-radius: ${(props) => props.theme.border.radius};
  cursor: pointer;
  font-size: ${(props) => props.theme.commonFontSizes.xxl};
  color: ${(props) => props.theme.commonColors.skyblue};
`;
