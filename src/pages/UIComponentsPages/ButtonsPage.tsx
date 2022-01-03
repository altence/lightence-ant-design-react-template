import { useState, useEffect } from 'react';
import { Col, Tooltip } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { PoweroffOutlined, SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from './UIComponentsPage.styles';

const ButtonsPage: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const { t } = useTranslation();
  let timeout: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const enterLoading = (index: number) => {
    setLoadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    timeout = setTimeout(() => {
      setLoadings((loadings) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <Col>
      <S.Card title={t('buttons.types')}>
        <Button type="primary">{t('buttons.primary')}</Button>
        <Button type="default">{t('buttons.default')}</Button>
        <Button type="ghost">{t('buttons.ghost')}</Button>
        <Button type="dashed">{t('buttons.dashed')}</Button>
        <Button type="text">{t('buttons.text')}</Button>
        <Button type="link">{t('buttons.link')}</Button>
      </S.Card>
      <S.Card title={t('buttons.sizes')}>
        <Button type="ghost" size="small">
          {t('buttons.small')}
        </Button>
        <Button type="ghost" size="middle">
          {t('buttons.default')}
        </Button>
        <Button type="ghost" size="large">
          {t('buttons.large')}
        </Button>
      </S.Card>
      <S.Card title={t('buttons.loadings')}>
        <Button type="primary" size="small" loading>
          {t('buttons.loading')}
        </Button>
        <Button type="primary" loading>
          {t('buttons.loading')}
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />

        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          {t('buttons.click')}
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)}>
          {t('buttons.click')}
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[2]} onClick={() => enterLoading(2)} />
      </S.Card>
      <S.Card title={t('buttons.danger')}>
        <Button type="primary" danger>
          {t('buttons.primary')}
        </Button>
        <Button type="default" danger>
          {t('buttons.default')}
        </Button>
        <Button type="dashed" danger>
          {t('buttons.dashed')}
        </Button>
        <Button type="text" danger>
          {t('buttons.text')}
        </Button>
        <Button type="link" danger>
          {t('buttons.link')}
        </Button>
      </S.Card>
      <S.Card title={t('buttons.disabled')}>
        <Button type="primary" disabled>
          {t('buttons.primary')}
        </Button>
        <Button type="default" disabled>
          {t('buttons.default')}
        </Button>
        <Button type="ghost" disabled>
          {t('buttons.ghost')}
        </Button>
        <Button type="dashed" disabled>
          {t('buttons.dashed')}
        </Button>
        <Button type="text" disabled>
          {t('buttons.text')}
        </Button>
        <Button type="link" disabled>
          {t('buttons.link')}
        </Button>
      </S.Card>
      <S.Card title={t('buttons.icons')}>
        <Tooltip title={t('buttons.search')}>
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Tooltip title={t('buttons.search')}>
          <Button type="primary" shape="circle">
            A
          </Button>
        </Tooltip>
        <Tooltip title={t('buttons.search')}>
          <Button type="primary" icon={<SearchOutlined />}>
            {t('buttons.search')}
          </Button>
        </Tooltip>

        <Tooltip title={t('buttons.search')}>
          <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
        </Tooltip>
        <Tooltip title={t('buttons.search')}>
          <Button type="dashed" icon={<SearchOutlined />} size="large">
            {t('buttons.search')}
          </Button>
        </Tooltip>
        <Tooltip title={t('buttons.search')}>
          <Button type="ghost" icon={<SearchOutlined />} size="large" href="https://www.google.com" />
        </Tooltip>
      </S.Card>
    </Col>
  );
};

export default ButtonsPage;
