import { useState } from 'react';
import { Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Modal, InfoModal, SuccessModal, WarningModal, ErrorModal } from '@app/components/common/Modal/Modal';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const ModalsPage: React.FC = () => {
  const { t } = useTranslation();
  const [isBasicModalOpen, setIsBasicModalOpen] = useState<boolean>(false);
  const [isSmallModalOpen, setIsSmallModalOpen] = useState<boolean>(false);
  const [isMiddleModalOpen, setIsMiddleModalOpen] = useState<boolean>(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState<boolean>(false);
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState<boolean>(false);

  const success = () => {
    SuccessModal({
      title: t('modals.successTitle'),
      content: t('modals.someContent'),
    });
  };

  const info = () => {
    InfoModal({
      title: t('modals.infoTitle'),
      content: t('modals.someContent'),
    });
  };

  const warning = () => {
    WarningModal({
      title: t('modals.warningTitle'),
      content: t('modals.someContent'),
    });
  };

  const error = () => {
    ErrorModal({
      title: t('modals.errorTitle'),
      content: t('modals.someContent'),
    });
  };

  return (
    <>
      <PageTitle>{t('common.modal')}</PageTitle>
      <Col>
        <S.Card title={t('modals.basic')}>
          <Button type="primary" onClick={() => setIsBasicModalOpen(true)}>
            {t('modals.open')}
          </Button>
          <Modal
            title={t('modals.basic')}
            open={isBasicModalOpen}
            onOk={() => setIsBasicModalOpen(false)}
            onCancel={() => setIsBasicModalOpen(false)}
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </Modal>
        </S.Card>
        <S.Card title={t('modals.sizes')}>
          <Button type="primary" onClick={() => setIsSmallModalOpen(true)}>
            {t('modals.small')}
          </Button>
          <Button type="primary" onClick={() => setIsMiddleModalOpen(true)}>
            {t('modals.middle')}
          </Button>
          <Button type="primary" onClick={() => setIsLargeModalOpen(true)}>
            {t('modals.large')}
          </Button>
          <Button type="primary" onClick={() => setIsFullscreenModalOpen(true)}>
            {t('modals.fullscreen')}
          </Button>
          <Modal
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
          </Modal>
          <Modal
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
          </Modal>
          <Modal
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
          </Modal>
          <Modal
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
          </Modal>
        </S.Card>
        <S.Card title={t('modals.infoModal')}>
          <Button severity="success" type="default" onClick={success}>
            {t('modals.success')}
          </Button>
          <Button severity="info" type="default" onClick={info}>
            {t('modals.info')}
          </Button>
          <Button severity="warning" type="default" onClick={warning}>
            {t('modals.warning')}
          </Button>
          <Button severity="error" type="default" onClick={error}>
            {t('modals.error')}
          </Button>
        </S.Card>
      </Col>
    </>
  );
};

export default ModalsPage;
