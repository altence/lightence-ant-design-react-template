import styled from 'styled-components';
import { Card as CommonCard } from 'components/common/Card/Card';

export const Title = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.xxl};
  font-weight: ${(props) => props.theme.commonFontWeight.bold};
  color: ${(props) => props.theme.colors.text.secondary};
  line-height: 1.9375rem;
`;

export const TablesWrapper = styled.div`
  margin-top: 1.875rem;
`;

export const Card = styled(CommonCard)`
  margin-bottom: 2rem;
`;
