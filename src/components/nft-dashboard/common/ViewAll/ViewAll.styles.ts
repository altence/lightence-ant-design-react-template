import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';

interface ViewAllInternalProps {
  $bordered: boolean;
}

export const ViewAllBtn = styled(Button)<ViewAllInternalProps>`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-weight: ${(props) => props.theme.commonFontWeight.medium};

  color: ${(props) => props.theme.colors.text.main};

  ${(props) => props.$bordered && `border-bottom: 0.2px solid ${props.theme.colors.border.nft}`};
`;
