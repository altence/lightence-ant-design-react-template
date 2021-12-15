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
        <Button type="link" target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          {t('breadcrumbs.general')}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          {t('breadcrumbs.layout')}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          {t('breadcrumbs.navigation')}
        </Button>
      </MenuItem>
    </Menu>
  );
  return (
    <Col>
      <S.Card title={t('breadcrumbs.basic')} padding="1.25rem 0">
        <Breadcrumb>
          <BreadcrumbItem>{t('breadcrumbs.home')}</BreadcrumbItem>
          <BreadcrumbItem href="">{t('breadcrumbs.applicationCenter')}</BreadcrumbItem>
          <BreadcrumbItem href="">{t('breadcrumbs.applicationList')}</BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.application')}</BreadcrumbItem>
        </Breadcrumb>
      </S.Card>
      <S.Card title={t('breadcrumbs.withIcon')} padding="1.25rem 0">
        <Breadcrumb>
          <BreadcrumbItem href="">
            <HomeOutlined />
          </BreadcrumbItem>
          <BreadcrumbItem href="">
            <UserOutlined />
            <span>{t('breadcrumbs.applicationList')}</span>
          </BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.application')}</BreadcrumbItem>
        </Breadcrumb>
      </S.Card>
      <S.Card title={t('breadcrumbs.customSeparator')} padding="1.25rem 0">
        <Breadcrumb separator=">">
          <BreadcrumbItem>{t('breadcrumbs.home')}</BreadcrumbItem>
          <BreadcrumbItem href="">{t('breadcrumbs.applicationCenter')}</BreadcrumbItem>
          <BreadcrumbItem href="">{t('breadcrumbs.applicationList')}</BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.application')}</BreadcrumbItem>
        </Breadcrumb>
      </S.Card>
      <S.Card title={t('breadcrumbs.withDropdown')} padding="1.25rem 0">
        <Breadcrumb>
          <BreadcrumbItem>{t('breadcrumbs.antd')}</BreadcrumbItem>
          <BreadcrumbItem href="">{t('breadcrumbs.component')}</BreadcrumbItem>
          <BreadcrumbItem href="" overlay={menu}>
            {t('breadcrumbs.general')}
          </BreadcrumbItem>
          <BreadcrumbItem>{t('breadcrumbs.button')}</BreadcrumbItem>
        </Breadcrumb>
      </S.Card>
    </Col>
  );
};

export default BreadcrumbsPage;
