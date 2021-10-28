import styled, { css } from 'styled-components';
import { Menu, Typography } from 'antd';

interface TagProps {
  isActive: boolean;
  color?: string;
}

export const TagMenu = styled(Menu)`
  max-width: 300px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07) !important;
  line-height: 1.5715;

  padding: ${(props) => props.theme.mobileLayout.paddingHorizontal};

  border-radius: ${(props) => props.theme.border.radius};
`;

export const Title = styled(Typography.Text)`
  font-size: 1rem;
`;

export const Tag = styled.div<TagProps>`
  cursor: pointer;
  padding: 0 0.5rem;
  min-height: 2rem;
  transition: all 0.3s ease;

  border-radius: ${(props) => props.theme.border.radius};

  border: ${(props) => `1px solid ${props.theme.colors.border.main}`};

  background-color: ${(props) => props.color};

  color: ${(props) =>
    (props.color && props.color !== props.theme.commonColors.white && props.theme.colors.text.secondary) ||
    props.theme.colors.text.main};

  ${(props) =>
    props.isActive &&
    css`
      box-shadow: 0 0 0 4px rgb(0 89 171 / 50%);

      border-color: ${(props) => props.theme.colors.main.primary};
    `}

  & span[role='img'] {
    padding: 0.25rem;

    border: ${(props) => `1px solid ${props.theme.colors.border.main}`};

    color: ${(props) => props.theme.colors.text.main};

    background-color: ${(props) => props.theme.colors.main.mainBackground};

    border-radius: ${(props) => props.theme.border.radius};
  }
`;
