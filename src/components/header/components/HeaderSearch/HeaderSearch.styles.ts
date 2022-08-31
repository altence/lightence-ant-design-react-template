import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { Modal } from 'components/common/Modal/Modal';
import { Button } from 'components/common/buttons/Button/Button';
import { SearchInput } from 'components/common/inputs/SearchInput/SearchInput';
import { BORDER_RADIUS, media } from '@app/styles/themes/constants';

export const SearchIcon = styled(SearchOutlined)`
  &.anticon.anticon-search {
    display: block;
    font-size: 1.25rem;

    @media only screen and ${media.md} {
      font-size: 1.625rem;
    }
  }
`;

export const InputSearch = styled(SearchInput)`
  .ant-input-group-addon {
    display: none;
  }

  @media only screen and ${media.md} {
    .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
      border-radius: 3.125rem;
      border: 0;
      padding: 0.5625rem 1.25rem;
    }
  }
`;

export const SearchModal = styled(Modal)`
  border-radius: ${BORDER_RADIUS};

  & .ant-modal-body {
    padding: 0;
  }
`;

export const Btn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
