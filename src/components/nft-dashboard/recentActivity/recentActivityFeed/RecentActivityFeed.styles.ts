import styled from 'styled-components';

interface FeedWrapperInternalProps {
  $length: number;
}

export const FeedWrapper = styled.div<FeedWrapperInternalProps>`
  overflow-y: auto;

  max-height: ${(props) => (props.$length > 2 ? '500px' : '250px')}; // TODO find out a better solution
`;
