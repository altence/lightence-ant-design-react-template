import styled from 'styled-components';
import { BaseCard as CommonCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseCollapse } from '@app/components/common/BaseCollapse/BaseCollapse';

export const Card = styled(CommonCard)`
  width: 100%;
  margin-bottom: 1.25rem;

  .ant-card-head-title {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  .ant-card-body {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    align-items: center;
  }

  .ant-card-body:before,
  .ant-card-body:after {
    display: none;
  }

  &.ant-card-bordered {
    border: 1px solid ${({ theme }) => theme.border};
  }

  .ant-radio-wrapper, label {
    align-items: center;
  }

  .ant-spin-blur {
    opacity: 0;
  }

  .ant-select-selection-search {
    input {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }

  .ant-select-selection-placeholder {
    opacity: 0.5;
  }
`;

export const InputsWrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CollapseWrapper = styled(BaseCollapse)`
  width: 40rem;
`;
