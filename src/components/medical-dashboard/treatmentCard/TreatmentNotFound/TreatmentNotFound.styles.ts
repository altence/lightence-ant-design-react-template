import { BaseImage } from '@app/components/common/BaseImage/BaseImage';
import styled from 'styled-components';

export const Text = styled.div`
  color: var(--primary-color);
  text-align: center;
  font-size: 1.25rem;
  margin: 1rem 0;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const Image = styled(BaseImage)`
  max-width: 16rem;
`;
