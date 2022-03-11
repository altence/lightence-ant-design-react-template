import { Button } from '@app/components/common/buttons/Button/Button';
import styled from 'styled-components';

export const SectionContent = styled.div`
  margin: 1.5rem 0 0;

  .slick-slide > div {
    display: flex;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.25rem;
`;

export const ViewAllWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 0 1rem;
`;

export const ArrowBtn = styled(Button)`
  color: ${(props) => props.theme.colors.text.nftLight};
`;
