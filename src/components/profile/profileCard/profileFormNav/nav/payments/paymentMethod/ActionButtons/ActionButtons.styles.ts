import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  position: absolute;
  column-gap: 1rem;
  top: 13%;
  right: 7%;

  & > .ant-btn-link {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding: 0;
    width: unset;
    height: unset;
    color: ${({ theme }) => theme.textSecondary};
  }
`;
