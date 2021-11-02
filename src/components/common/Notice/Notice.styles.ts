import { Avatar, Space, Typography } from 'antd';
import styled from 'styled-components';
import { NoticeType } from './Notice';

interface SpacewWrapperProps {
  type: NoticeType;
}

export const NoticeIcon = styled(Avatar)``;

export const Title = styled(Typography.Text)`
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Description = styled(Typography.Text)`
  font-size: 0.875rem;
`;

export const SpaceWrapper = styled(Space)<SpacewWrapperProps>`
  background-color: ${(props) => props.theme.colors.main.mainBackground};

  & ${Title}, span[role='img'] {
    ${(props) => props.type === 'error' && `color: ${props.theme.colors.main.error}`};

    ${(props) => props.type === 'warning' && `color: ${props.theme.colors.main.warning}`};

    ${(props) => props.type === 'success' && `color: ${props.theme.colors.main.success}`};

    ${(props) => props.type === 'info' && `color: ${props.theme.colors.main.primary}`};

    ${(props) => props.type === 'mention' && `color: ${props.theme.colors.main.primary}`};
  }

  & span[role='img'] {
    font-size: 2rem;
  }
`;
