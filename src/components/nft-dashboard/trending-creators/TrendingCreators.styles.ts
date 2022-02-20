import styled from 'styled-components';
import Stories from 'react-insta-stories';

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 0.2px solid #a3a3b3;
  padding-bottom: 0.875rem;
`;

// TODO refactor typings
export const h1 = styled.h1`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0;
`;

export const ViewAll = styled.a`
  font-family: Lato;
  font-weight: 400;
  font-size: 12px;
  color: #475164;
`;

export const SectionContent = styled.div`
  margin: 1.5rem 0;
`;

export const StoriesStyled = styled(Stories)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`;
