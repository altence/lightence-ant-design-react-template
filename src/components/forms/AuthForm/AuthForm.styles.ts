import styled from 'styled-components';
import { Steps as AntdSteps } from 'antd';

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
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
