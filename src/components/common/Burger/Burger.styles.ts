import styled from 'styled-components';

export const Burger = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3125rem;
`;

export const BurgerLine = styled.span`
  width: 1.5625rem;
  height: 0.1875rem;

  background-color: ${(props) => props.theme.colors.main.mainBackground};
`;
