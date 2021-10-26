import styled from 'styled-components';
import { Menu, Typography } from 'antd';

interface ControlsWrapperProps {
  isActive: boolean;
}

interface TagWrapperProps {
  color: string;
}

export const TagMenu = styled(Menu)`
  padding: 1rem;
  max-width: 300px;

  border-radius: ${(props) => props.theme.border.radius};

  background-color: ${(props) => props.theme.colors.main.mainBackground};
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07) !important;
`;

export const Title = styled(Typography.Text)`
  font-size: 1rem;
`;

export const TagWrapper = styled.div`
  margin: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  & span[role='img'] {
    color: ${(props) => props.theme.colors.text.main};
  }
`;

export const Tag = styled.div<TagWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  column-gap: 0.5rem;
  padding: 0 0.5rem;
  min-height: 2rem;

  border-radius: ${(props) => props.theme.border.radius};

  background-color: ${(props) => props.color};

  color: ${(props) => (props.color && props.theme.colors.text.secondary) || props.theme.colors.text.main};
`;

export const ControlsWrapper = styled.div<ControlsWrapperProps>`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  & > div {
    transition: all 0.5s ease;

    opacity: ${(props) => (props.isActive && '1') || '0'};
  }
`;
