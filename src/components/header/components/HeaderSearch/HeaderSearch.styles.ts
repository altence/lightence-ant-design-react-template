import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { BaseModal } from '@app/components/common/BaseModal/BaseModal';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { SearchInput } from 'components/common/inputs/SearchInput/SearchInput';
import { media } from '@app/utils/utils';

export const SearchIcon = styled(SearchOutlined)`
  &.anticon.anticon-search {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.xl};

    @media only screen and (${media('md')}) {
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
    }
  }
`;

export const InputSearch = styled(SearchInput)`
  .ant-input-group-addon {
    display: none;
  }

  @media only screen and (${media('md')}) {
    .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
      border-radius: 3.125rem;
      border: 0;
      padding: 0.5625rem 1.25rem;
    }
  }
`;

export const SearchModal = styled(BaseModal)`
  border-radius: ${({ theme }) => theme.borderRadius};

  & .ant-modal-body {
    padding: 0;
  }
`;

export const Btn = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
