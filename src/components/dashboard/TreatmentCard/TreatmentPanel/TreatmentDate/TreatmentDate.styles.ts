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

  @media only screen and ${(props) => props.theme.media.md} {
    width: 2.2rem;
    height: 2.2rem;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    width: 3rem;
    height: 3rem;
  }
`;

export const NotificationDot = styled(Badge)`
  .ant-badge-dot {
    width: 0.1875rem;
    height: 0.1875rem;
    min-width: 0.1875rem;
    transform: none;

    @media only screen and ${(props) => props.theme.media.xl} {
      width: 0.4375rem;
      height: 0.4375rem;
      min-width: 0.4375rem;
    }
  }
`;

export const Bell = styled(BellOutlined)`
  font-size: ${(props) => props.theme.commonFontSizes.md};

  color: ${(props) => props.theme.colors.text.secondary};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.lg};
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.xxl};
  }
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
