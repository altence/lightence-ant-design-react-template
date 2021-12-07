import styled from 'styled-components';
import { Steps as AntdSteps } from 'antd';
import { Select as CommonSelect } from 'components/common/selects/Select/Select';
import { Button } from '../../common/buttons/Button/Button';
import { FormItem } from 'components/common/Form/Form.styles';
import theme from 'styles/theme';

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
  width: 30rem;
  justify-content: space-between;
`;

export const DetailsTitle = styled.div`
  color: ${(props) => props.theme.colors.text.light};
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  margin-right: 0.5rem;
`;

export const DetailsValue = styled.div`
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
`;

export const Steps = styled(AntdSteps)`
  height: auto;
  & .ant-steps-item-container,
  .ant-steps-item .ant-steps-item-content {
    display: flex;
    align-items: center;
  }

  & .ant-steps-item-tail::after,
  .ant-steps-item-title::after {
    background: ${(props) => props.theme.colors.text.light} !important;
  }

  & .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail::after {
    height: 1.125rem;
    margin-top: 0.125rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  min-width: 35rem;

  @media only screen and ${theme.media.xs} {
    min-width: 100%;
  }

  @media only screen and ${theme.media.md} {
    min-width: 35rem;
  }
`;
