import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseModal } from '@app/components/common/BaseModal/BaseModal';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const ModalsPage: React.FC = () => {
  const { t } = useTranslation();
  const [isBasicModalOpen, setIsBasicModalOpen] = useState<boolean>(false);
  const [isSmallModalOpen, setIsSmallModalOpen] = useState<boolean>(false);
  const [isMiddleModalOpen, setIsMiddleModalOpen] = useState<boolean>(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState<boolean>(false);
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState<boolean>(false);

  const success = () => {
    BaseModal.success({
      title: t('modals.successTitle'),
      content: t('modals.someContent'),
    });
  };

  const info = () => {
    BaseModal.info({
      title: t('modals.infoTitle'),
      content: t('modals.someContent'),
    });
  };

  const warning = () => {
    BaseModal.warning({
      title: t('modals.warningTitle'),
      content: t('modals.someContent'),
    });
  };

  const error = () => {
    BaseModal.error({
      title: t('modals.errorTitle'),
      content: t('modals.someContent'),
    });
  };

  return (
    <>
      <PageTitle>{t('common.modal')}</PageTitle>
      <BaseCol>
        <S.Card title={t('modals.basic')}>
          <BaseButton type="primary" onClick={() => setIsBasicModalOpen(true)}>
            {t('modals.open')}
          </BaseButton>
          <BaseModal
            title={t('modals.basic')}
            open={isBasicModalOpen}
            onOk={() => setIsBasicModalOpen(false)}
            onCancel={() => setIsBasicModalOpen(false)}
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </BaseModal>
        </S.Card>
        <S.Card title={t('modals.sizes')}>
          <BaseButton type="primary" onClick={() => setIsSmallModalOpen(true)}>
            {t('modals.small')}
          </BaseButton>
          <BaseButton type="primary" onClick={() => setIsMiddleModalOpen(true)}>
            {t('modals.middle')}
          </BaseButton>
          <BaseButton type="primary" onClick={() => setIsLargeModalOpen(true)}>
            {t('modals.large')}
          </BaseButton>
          <BaseButton type="primary" onClick={() => setIsFullscreenModalOpen(true)}>
            {t('modals.fullscreen')}
          </BaseButton>
          <BaseModal
            title={t('modals.smallTitle')}
            centered
            open={isSmallModalOpen}
            onOk={() => setIsSmallModalOpen(false)}
            onCancel={() => setIsSmallModalOpen(false)}
            size="small"
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </BaseModal>
          <BaseModal
            title={t('modals.middleTitle')}
            centered
            open={isMiddleModalOpen}
            onOk={() => setIsMiddleModalOpen(false)}
            onCancel={() => setIsMiddleModalOpen(false)}
            size="medium"
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </BaseModal>
          <BaseModal
            title={t('modals.largeTitle')}
            centered
            open={isLargeModalOpen}
            onOk={() => setIsLargeModalOpen(false)}
            onCancel={() => setIsLargeModalOpen(false)}
            size="large"
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </BaseModal>
          <BaseModal
            title={t('modals.fullscreenTitle')}
            centered
            open={isFullscreenModalOpen}
            onOk={() => setIsFullscreenModalOpen(false)}
            onCancel={() => setIsFullscreenModalOpen(false)}
            width={'100%'}
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </BaseModal>
        </S.Card>
        <S.Card title={t('modals.infoModal')}>
          <BaseButton severity="success" type="default" onClick={success}>
            {t('modals.success')}
          </BaseButton>
          <BaseButton severity="info" type="default" onClick={info}>
            {t('modals.info')}
          </BaseButton>
          <BaseButton severity="warning" type="default" onClick={warning}>
            {t('modals.warning')}
          </BaseButton>
          <BaseButton severity="error" type="default" onClick={error}>
            {t('modals.error')}
          </BaseButton>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default ModalsPage;
