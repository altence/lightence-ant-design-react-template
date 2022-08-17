import { BORDER_RADIUS, FONT_SIZE } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const AddCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.75rem;
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: ${BORDER_RADIUS};
  cursor: pointer;
  font-size: ${FONT_SIZE.xxl};
  color: var(--border-color);
`;
