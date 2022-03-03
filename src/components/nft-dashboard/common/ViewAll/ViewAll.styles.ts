import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';

export const ViewAllBtn = styled(Button)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-weight: ${(props) => props.theme.commonFontWeight.regular};

  border-bottom: ${(props) => `0.2px solid ${props.theme.colors.border.nft}`};
`;
