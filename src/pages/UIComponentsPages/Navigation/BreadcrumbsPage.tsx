import { Col } from 'antd';
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
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer" href="/">
          {t('breadcrumbs.general')}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer" href="/">
          {t('breadcrumbs.layout')}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer" href="/">
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
            <UserOutlined />
            <span>{t('breadcrumbs.applicationList')}</span>
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
