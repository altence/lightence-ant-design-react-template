import styled from 'styled-components';
import { BaseSelect as CommonSelect } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import { BaseSteps } from '@app/components/common/BaseSteps/BaseSteps';

export const PhoneItem = styled(BaseForm.Item)`
  .ant-input-group-addon {
    padding: 0;
  }

  .ant-input-group-addon > div {
    width: 100% !important;
  }
`;

export const Steps = styled(BaseSteps)``;

export const FormContent = styled.div`
  margin: 1.25rem 0.5rem;
`;

export const PrevButton = styled(BaseButton)`
  margin: 0 0.5rem;
`;

export const Select = styled(CommonSelect)`
  width: 5.9375rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 1.25rem 0.5rem;
`;

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailsTitle = styled.div`
  color: var(--text-light-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-right: 0.5rem;
`;

export const DetailsValue = styled.div`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
`;

export const Row = styled.div`
  display: flex;
  gap: 0.5rem;
`;
