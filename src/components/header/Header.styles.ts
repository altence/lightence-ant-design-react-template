import styled, { css } from 'styled-components';
import { BurgerIcon } from '@app/components/common/Burger/BurgerIcon';
import { GitHubButton } from '@app/components/header/components/GithubButton/GitHubButton';
import { BaseCollapse } from '../common/BaseCollapse/BaseCollapse';
import { BaseCol } from '../common/BaseCol/BaseCol';
import { media } from '@app/utils/utils';

export const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn span[role='img'],
  .ant-badge {
    font-size: ${({ theme }) => theme.fontSizes.xl};

    @media only screen and (${media('md')}) {
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`;

export const DropdownCollapse = styled(BaseCollapse)`
  & > .ant-collapse-item > .ant-collapse-header {
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.primary};

    @media only screen and (${media('md')}) {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }

  & > .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default;

    & > span[role='img'] {
      display: none;
    }
  }
`;

export const BurgerCol = styled(BaseCol)`
  z-index: 999;
  display: flex;
`;

export const MobileBurger = styled(BurgerIcon)`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: -0.5rem;
  color: ${(props) => (props.isCross ? props.theme.textSecondary : props.theme.textMain)};
`;

export const SearchColumn = styled(BaseCol)`
  padding: ${({ theme }) => `${theme.paddings.md} ${theme.paddings.xl}`};
`;

interface ProfileColumn {
  $isTwoColumnsLayout: boolean;
}

export const ProfileColumn = styled(BaseCol)<ProfileColumn>`
  @media only screen and (${media('md')}) {
    ${(props) =>
      props.$isTwoColumnsLayout &&
      css`
        background-color: ${props.theme.siderBackground};
        padding: ${({ theme }) => `${theme.paddings.md} ${theme.paddings.xl}`};
      `}
  }
`;

export const GHButton = styled(GitHubButton)`
  &.ant-btn {
    display: none;

    @media only screen and (${media('lg')}) {
      display: flex;
    }
  }
`;
