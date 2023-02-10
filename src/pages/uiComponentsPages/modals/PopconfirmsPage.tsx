import { useState } from 'react';
import { Col, message } from 'antd';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Popconfirm } from '@app/components/common/Popconfirm/Popconfirm';
import { TopButtons, LeftButtons, RightButtons, BottomButtons } from '@app/pages/uiComponentsPages/modals/PopoversPage';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { FONT_SIZE, media } from '@app/styles/themes/constants';

const AsyncButton = styled(Button)`
  @media only screen and ${media.xs} {
    font-size: ${FONT_SIZE.xs};
  }
  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.md};
  }
`;

const PopconfirmsPage: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  const text = t('popconfirm.content');

  const confirm = () => {
    message.info(t('popconfirm.yesClick'));
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <PageTitle>{t('common.popconfirm')}</PageTitle>
      <Col>
        <S.Card title={t('popconfirm.basic')}>
          <Popconfirm title={text}>
            <Button type="primary">{t('common.delete')}</Button>
          </Popconfirm>
        </S.Card>
        <S.Card title={t('popconfirm.positions')}>
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
        <S.Card title={t('popconfirm.async')}>
          <Popconfirm
            title={t('popovers.title')}
            open={open}
            onConfirm={handleOk}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={() => setOpen(false)}
          >
            <AsyncButton type="primary" onClick={() => setOpen(true)}>
              {t('popconfirm.openAsync')}
            </AsyncButton>
          </Popconfirm>
        </S.Card>
      </Col>
    </>
  );
};

export default PopconfirmsPage;
