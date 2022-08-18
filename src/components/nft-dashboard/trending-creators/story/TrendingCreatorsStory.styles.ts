import styled from 'styled-components';

interface StoriesInternalProps {
  $viewed: boolean;
}

export const CreatorButton = styled.button<StoriesInternalProps>`
  display: flex;
  align-items: center;
  text-align: center;
  background: 0 0;
  border: 0;
  cursor: pointer;
  border-radius: 50%;
  padding: 2px;

  border: 3px solid ${(props) => (!props.$viewed ? 'var(--primary-color)' : 'var(--text-superLight-color)')};
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
