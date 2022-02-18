import { Button } from '@app/components/common/buttons/Button/Button';
import { Typography } from 'antd';
import styled from 'styled-components';

export const TitleText = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 1.25rem;

    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }
`;

export const TitleBalanceText = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-family: ${(props) => props.theme.fonts.secondary};
  }
`;

export const SubtitleBalanceText = styled(Typography.Text)`
  font-family: ${(props) => props.theme.fonts.secondary};

  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-weight: ${(props) => props.theme.commonFontWeight.regular};

  color: ${(props) => props.theme.colors.text.nftLight};
`;

export const TopUpButton = styled(Button)`
  ${(props) => props.type === 'ghost' && `color: ${props.theme.colors.text.secondary}`};
`;
