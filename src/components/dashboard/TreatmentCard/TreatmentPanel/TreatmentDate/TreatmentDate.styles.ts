import styled from 'styled-components';
import { Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { Badge } from 'components/common/Badge/Badge';

export const NotificationWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.main.primary};
`;

export const NotificationDot = styled(Badge)`
  .ant-badge-dot {
    width: 3px;
    height: 3px;
    min-width: 3px;
    transform: none;
  }
`;

export const Bell = styled(BellOutlined)`
  font-size: ${(props) => props.theme.commonFontSizes.md};

  color: ${(props) => props.theme.colors.text.secondary};
`;

export const Title = styled(Typography.Text)`
  font-size: 2.8rem;
  display: block;
  text-align: center;

  font-weight: ${(props) => props.theme.commonFontWeight.bold};

  color: ${(props) => props.theme.colors.main.primary};
`;

export const Subtitle = styled(Typography.Text)`
  display: block;
  text-align: center;
  font-weight: ${(props) => props.theme.commonFontWeight.bold};

  font-size: ${(props) => props.theme.commonFontSizes.xl};

  color: ${(props) => props.theme.colors.main.primary};
`;

export const Text = styled(Typography.Text)`
  display: block;
  text-align: center;
  font-weight: ${(props) => props.theme.commonFontWeight.bold};

  font-size: ${(props) => props.theme.commonFontSizes.xl};
`;
