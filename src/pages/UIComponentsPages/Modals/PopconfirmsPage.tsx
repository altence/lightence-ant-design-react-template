import { useState } from 'react';
import { Col, message } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { Popconfirm } from 'components/common/Popconfirm/Popconfirm';
import { useTranslation } from 'react-i18next';
import { TopButtons, LeftButtons, RightButtons, BottomButtons } from './PopoversPage';
import * as S from '../UIComponentsPage.styles';

const PopconfirmsPage: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  const text = t('popconfirm.content');

  const confirm = () => {
    message.info(t('popconfirm.yesClick'));
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <Col>
      <S.Card title={t('popconfirm.basic')} padding="1.25rem 0">
        <Popconfirm title={text}>
          <Button type="primary">{t('popconfirm.delete')}</Button>
        </Popconfirm>
      </S.Card>
      <S.Card title={t('popconfirm.positions')} padding="1.25rem 0">
        <div>
          <TopButtons>
            <Popconfirm
              placement="topLeft"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.tl')}</Button>
            </Popconfirm>
            <Popconfirm
              placement="top"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.top')}</Button>
            </Popconfirm>
            <Popconfirm
              placement="topRight"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.tr')}</Button>
            </Popconfirm>
          </TopButtons>
          <LeftButtons>
            <Popconfirm
              placement="leftTop"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.lt')}</Button>
            </Popconfirm>
            <Popconfirm
              placement="left"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.left')}</Button>
            </Popconfirm>
            <Popconfirm
              placement="leftBottom"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.lb')}</Button>
            </Popconfirm>
          </LeftButtons>
          <RightButtons>
            <Popconfirm
              placement="rightTop"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.rt')}</Button>
            </Popconfirm>
            <Popconfirm
              placement="right"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.right')}</Button>
            </Popconfirm>
            <Popconfirm
              placement="rightBottom"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.rb')}</Button>
            </Popconfirm>
          </RightButtons>
          <BottomButtons>
            <Popconfirm
              placement="bottomLeft"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.bl')}</Button>
            </Popconfirm>
            <Popconfirm
              placement="bottom"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.bottom')}</Button>
            </Popconfirm>
            <Popconfirm
              placement="bottomRight"
              title={text}
              onConfirm={confirm}
              okText={t('popconfirm.yes')}
              cancelText={t('popconfirm.no')}
            >
              <Button>{t('popovers.br')}</Button>
            </Popconfirm>
          </BottomButtons>
        </div>
      </S.Card>
      <S.Card title={t('popconfirm.async')} padding="1.25rem 0">
        <Popconfirm
          title={t('popovers.title')}
          visible={visible}
          onConfirm={handleOk}
          okButtonProps={{ loading: confirmLoading }}
          onCancel={() => setVisible(false)}
        >
          <Button type="primary" onClick={() => setVisible(true)}>
            {t('popconfirm.openAsync')}
          </Button>
        </Popconfirm>
      </S.Card>
    </Col>
  );
};

export default PopconfirmsPage;
