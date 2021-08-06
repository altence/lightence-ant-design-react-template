import styled from 'styled-components';
import { CalendarOutlined } from '@ant-design/icons';

interface TitleProps {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  margin-bottom: 1rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

export const Title = styled.span<TitleProps>`
  font-weight: 500;
  font-size: 1rem;

  color: ${(props) => (props.isActive && props.theme.colors.primary) || 'unset'};
`;

export const CalendarIcon = styled(CalendarOutlined)`
  margin-right: 0.75rem;
`;

export const Date = styled.div`
  font-size: 0.625rem;
`;
