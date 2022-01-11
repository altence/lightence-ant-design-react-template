import { Col, Space } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { Breadcrumb, BreadcrumbItem } from 'components/common/Breadcrumb/Breadcrumb';
import { Menu, MenuItem } from 'components/common/Menu/Menu';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

const BreadcrumbsPage: React.FC = () => {
  const { t } = useTranslation();

  const menu = (
    <Menu>
      <MenuItem key={1}>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('breadcrumbs.general')}
        </Button>
      </MenuItem>
      <MenuItem key={2}>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('breadcrumbs.layout')}
        </Button>
      </MenuItem>
      <MenuItem key={3}>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('breadcrumbs.navigation')}
        </Button>
      </MenuItem>
    </Menu>
  );
  return (
    <Col>
      <S.Card title={t('breadcrumbs.basic')}>
        <Breadcrumb>
          <BreadcrumbItem>{t('breadcrumbs.home')}</BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.applicationCenter')}</BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.applicationList')}</BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.application')}</BreadcrumbItem>
        </Breadcrumb>
      </S.Card>
      <S.Card title={t('breadcrumbs.withIcon')}>
        <Breadcrumb>
          <BreadcrumbItem>
            <HomeOutlined />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Space>
              <UserOutlined />
              <span>{t('breadcrumbs.applicationList')}</span>
            </Space>
          </BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.application')}</BreadcrumbItem>
        </Breadcrumb>
      </S.Card>
      <S.Card title={t('breadcrumbs.customSeparator')}>
        <Breadcrumb separator=">">
          <BreadcrumbItem>{t('breadcrumbs.home')}</BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.applicationCenter')}</BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.applicationList')}</BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.application')}</BreadcrumbItem>
        </Breadcrumb>
      </S.Card>
      <S.Card title={t('breadcrumbs.withDropdown')}>
        <Breadcrumb>
          <BreadcrumbItem>{t('breadcrumbs.antd')}</BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.component')}</BreadcrumbItem>
          <BreadcrumbItem overlay={menu}>{t('breadcrumbs.general')}</BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.button')}</BreadcrumbItem>
        </Breadcrumb>
      </S.Card>
    </Col>
  );
};

export default BreadcrumbsPage;
