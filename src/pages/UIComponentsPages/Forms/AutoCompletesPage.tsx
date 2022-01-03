import { useState } from 'react';
import { Col } from 'antd';
import { AutoComplete } from 'components/common/AutoComplete/AutoComplete';
import { SearchInput as CommonSearchInput } from 'components/common/inputs/SearchInput/SearchInput';
import { Option } from 'components/common/selects/Select/Select';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import * as S from '../UIComponentsPage.styles';

const Link = styled.a`
  float: right;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchInput = styled(CommonSearchInput)`
  .ant-input-search-button {
    @media only screen and ${(props) => props.theme.media.xs} {
      height: 2.7rem;
    }

    @media only screen and ${(props) => props.theme.media.md} {
      height: 3.1rem;
    }
  }
`;

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const AutoCompletesPage: React.FC = () => {
  const { t } = useTranslation();
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [result, setResult] = useState<string[]>([]);

  const handleCustomSearch = (value: string) => {
    let res: string[] = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
    }
    setResult(res);
  };

  const handleSearch = (searchText: string) => {
    setOptions(!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]);
  };

  const renderTitle = (title: string) => (
    <span>
      {title}
      <Link href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
        more
      </Link>
    </span>
  );

  const renderItem = (title: string, count: number) => ({
    value: title,
    label: (
      <CategoryWrapper>
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </CategoryWrapper>
    ),
  });

  const categories = [
    {
      label: renderTitle(t('autoCompletes.libraries')),
      options: [renderItem(t('autoCompletes.antDesign'), 10000), renderItem(t('autoCompletes.antDesignUI'), 10600)],
    },
    {
      label: renderTitle(t('autoCompletes.solutions')),
      options: [
        renderItem(t('autoCompletes.antDesignUIFaq'), 60100),
        renderItem(t('autoCompletes.antDesignFaq'), 30010),
      ],
    },
    {
      label: renderTitle(t('autoCompletes.articles')),
      options: [renderItem(t('autoCompletes.antDesignLanguage'), 100000)],
    },
  ];

  return (
    <Col>
      <S.Card title={t('autoCompletes.basic')}>
        <AutoComplete
          options={options}
          style={{ width: 200 }}
          onSearch={handleSearch}
          placeholder={t('autoCompletes.inputHere')}
        />
      </S.Card>
      <S.Card title={t('autoCompletes.customOptions')}>
        <AutoComplete style={{ width: 200 }} onSearch={handleCustomSearch} placeholder={t('autoCompletes.inputHere')}>
          {result.map((email: string) => (
            <Option key={email} value={email}>
              {email}
            </Option>
          ))}
        </AutoComplete>
      </S.Card>
      <S.Card title={t('autoCompletes.categories')}>
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={500}
          style={{ width: 400 }}
          options={categories}
        >
          <SearchInput placeholder={t('autoCompletes.inputHere')} prefix={null} />
        </AutoComplete>
      </S.Card>
    </Col>
  );
};

export default AutoCompletesPage;
