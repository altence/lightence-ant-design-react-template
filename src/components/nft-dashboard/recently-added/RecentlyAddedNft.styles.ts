import styled from 'styled-components';

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 0.2px solid #a3a3b3;
  padding-bottom: 0.875rem;
`;

// TODO probably refactor h1
export const h1 = styled.h1`
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  font-weight: ${(props) => props.theme.commonFontSizes.md};
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.text.nftMain};
`;

export const ViewAll = styled.div`
  padding: 0 15px;
  border-bottom: 0.2px solid #a3a3b3;
`;

export const ViewAllLink = styled.a`
  font-family: ${(props) => props.theme.fonts.secondaryFont};
  font-weight: 400;
  font-size: 12px;
  color: #475164;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  width: 100%;
`;
