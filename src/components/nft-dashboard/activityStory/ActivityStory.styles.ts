import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const Title = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-weight: ${FONT_WEIGHT.semibold};

    font-size: ${FONT_SIZE.xs};
  }
`;

export const ActivityRow = styled(BaseRow)`
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 100%;
`;
