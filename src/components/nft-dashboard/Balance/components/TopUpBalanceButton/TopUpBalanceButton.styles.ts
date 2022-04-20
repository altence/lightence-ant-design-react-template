import { Button } from '@app/components/common/buttons/Button/Button';
import styled from 'styled-components';

export const TopUpButton = styled(Button)`
  ${(props) => props.type === 'ghost' && `color: ${props.theme.colors.text.secondary}`};
`;
