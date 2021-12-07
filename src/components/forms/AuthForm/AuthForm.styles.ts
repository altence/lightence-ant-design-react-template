import styled from 'styled-components';
import { Steps as AntdSteps } from 'antd';
import { Select as CommonSelect } from 'components/common/selects/Select/Select';
import { Button } from '../../common/buttons/Button/Button';
import { FormItem } from 'components/common/Form/Form.styles';

export const PhoneItem = styled(FormItem)`
  width: 100%;

  & .ant-input-group-addon {
    width: 5.5rem;
    padding: 0;
  }

  & .ant-input-group-addon > div {
    width: 100% !important;
  }
`;

export const FormContent = styled.div`
  margin: 1.25rem 0.5rem;
`;

export const PrevButton = styled(Button)`
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
`;

export const DetailsTitle = styled.div`
  color: ${(props) => props.theme.colors.main.primary};
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  margin-right: 0.5rem;
`;

export const DetailsValue = styled.div`
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.md};
`;

export const Steps = styled(AntdSteps)`
  & .ant-steps-item-container {
    display: flex;
    align-items: center;
  }
`;
