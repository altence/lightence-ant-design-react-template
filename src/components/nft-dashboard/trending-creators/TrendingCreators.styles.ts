import styled from 'styled-components';
import { Modal } from '@app/components/common/Modal/Modal';
import { Button } from '@app/components/common/buttons/Button/Button';

export const SectionContent = styled.div`
  margin: 1.5rem 0;
`;

export const StoriesModal = styled(Modal)`
  .ant-modal-body {
    padding: 0;
  }
`;

export const ArrowBtn = styled(Button)`
  color: ${(props) => props.theme.colors.text.nftLight};
`;

export const CardWrapper = styled.div`
  margin: 0 0.3rem;
`;
