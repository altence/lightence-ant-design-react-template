import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BasePopconfirm } from '@app/components/common/BasePopconfirm/BasePopconfirm';
import { TopButtons, LeftButtons, RightButtons, BottomButtons } from '@app/pages/uiComponentsPages/modals/PopoversPage';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { FONT_SIZE, media } from '@app/styles/themes/constants';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { notificationController } from '@app/controllers/notificationController';

const AsyncButton = styled(BaseButton)`
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
    notificationController.info({ message: t('popconfirm.yesClick') });
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
      <BaseCol>
        <S.Card title={t('popconfirm.basic')}>
          <BasePopconfirm title={text}>
            <BaseButton type="primary">{t('common.delete')}</BaseButton>
          </BasePopconfirm>
        </S.Card>
        <S.Card title={t('popconfirm.positions')}>
          <div>
            <TopButtons>
              <BasePopconfirm
                placement="topLeft"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.tl')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="top"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.top')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="topRight"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.tr')}</BaseButton>
              </BasePopconfirm>
            </TopButtons>
            <LeftButtons>
              <BasePopconfirm
                placement="leftTop"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.lt')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="left"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.left')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="leftBottom"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.lb')}</BaseButton>
              </BasePopconfirm>
            </LeftButtons>
            <RightButtons>
              <BasePopconfirm
                placement="rightTop"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.rt')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="right"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.right')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="rightBottom"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.rb')}</BaseButton>
              </BasePopconfirm>
            </RightButtons>
            <BottomButtons>
              <BasePopconfirm
                placement="bottomLeft"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.bl')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="bottom"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.bottom')}</BaseButton>
              </BasePopconfirm>
              <BasePopconfirm
                placement="bottomRight"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <BaseButton>{t('popovers.br')}</BaseButton>
              </BasePopconfirm>
            </BottomButtons>
          </div>
        </S.Card>
        <S.Card title={t('popconfirm.async')}>
          <BasePopconfirm
            title={t('popovers.title')}
            open={open}
            onConfirm={handleOk}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={() => setOpen(false)}
          >
            <AsyncButton type="primary" onClick={() => setOpen(true)}>
              {t('popconfirm.openAsync')}
            </AsyncButton>
          </BasePopconfirm>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default PopconfirmsPage;
