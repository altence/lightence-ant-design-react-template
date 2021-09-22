import styled from 'styled-components';
import { Typography, Badge as AntBadge, Avatar, Spin as AntSpin, Menu as AntMenu } from 'antd';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  line-height: initial;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.625rem;

  @media only screen and ${theme.media.md} {
    margin-bottom: 1.75rem;
  }

  @media only screen and ${theme.media.xxl} {
    margin-bottom: 2rem;
  }
`;

export const MenuWrapper = styled.div`
  flex-grow: 1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled(AntMenu)`
  padding: 0;
`;

export const DropdownContent = styled.div`
  padding: 0.5rem;
  font-size: 0.625rem;

  background: ${(props) => props.theme.colors.primaryAccent};

  border-radius: ${(props) => props.theme.border.radius};

  color: ${(props) => props.theme.colors.secondary};

  @media only screen and ${theme.media.xxl} {
    font-size: 0.75rem;
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.45rem;
  margin: 0 0.3rem;
  font-size: 1rem;
  cursor: pointer;

  background-color: rgba(255, 255, 255, 0.1);

  border-radius: ${(props) => props.theme.border.radius};

  color: ${(props) => props.theme.colors.secondary};

  @media only screen and ${theme.media.md} {
    margin: 0 0.5rem;
  }

  @media only screen and ${theme.media.xxl} {
    margin: 0 0.7rem;
    padding: 0.625rem;
    font-size: 1.5rem;
  }
`;

export const SearchDropdownHeader = styled(DropdownHeader)`
  @media only screen and ${theme.media.md} {
    width: 50%;

    & > input {
      margin: 0 0.5rem;

      color: ${(props) => props.theme.colors.secondary};

      &::placeholder {
        opacity: 0.4;

        color: ${(props) => props.theme.colors.secondary};
      }
    }

    & > button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Text = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.secondary};
`;

export const ProfileAvatar = styled(Avatar)`
  width: 1.62rem;
  height: 1.62rem;
  margin-right: 0.75rem;

  @media only screen and ${theme.media.xxl} {
    width: 2rem;
    height: 2rem;
  }
`;

export const ProfileDropdownHeader = styled(DropdownHeader)`
  padding: 0.18rem 0.45rem;

  & > ${Text} {
    font-size: 0.75rem;
    margin-right: 0.75rem;

    @media only screen and ${theme.media.xxl} {
      font-size: 0.875rem;
    }
  }
`;

export const Spin = styled(AntSpin)`
  margin: 0 0.75rem;
`;

export const Badge = styled(AntBadge)`
  font-size: inherit;
  color: inherit;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1.12rem;

  color: ${(props) => props.theme.colors.secondary};

  @media only screen and ${theme.media.md} {
    font-size: 1.5rem;
  }

  @media only screen and ${theme.media.xxl} {
    font-size: 2.25rem;
  }
`;

export const ExportDropdownHeader = styled(DropdownHeader)`
  & > ${Text} {
    font-size: 0.625rem;
    margin-right: 0.75rem;

    @media only screen and ${theme.media.xxl} {
      margin-right: 1.15rem;
      font-size: 0.75rem;
    }
  }
`;
