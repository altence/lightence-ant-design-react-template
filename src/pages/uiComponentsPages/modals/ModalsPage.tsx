import { useState } from 'react';
import { Col } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { Modal, InfoModal, SuccessModal, WarningModal, ErrorModal } from 'components/common/Modal/Modal';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

const ModalsPage: React.FC = () => {
  const { t } = useTranslation();
  const [isBasicModalVisible, setIsBasicModalVisible] = useState<boolean>(false);
  const [isSmallModalVisible, setIsSmallModalVisible] = useState<boolean>(false);
  const [isMiddleModalVisible, setIsMiddleModalVisible] = useState<boolean>(false);
  const [isLargeModalVisible, setIsLargeModalVisible] = useState<boolean>(false);
  const [isFullscreenModalVisible, setIsFullscreenModalVisible] = useState<boolean>(false);

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
    <Col>
      <S.Card title={t('modals.basic')}>
        <Button type="primary" onClick={() => setIsBasicModalVisible(true)}>
          {t('modals.open')}
        </Button>
        <Modal
          title={t('modals.basic')}
          visible={isBasicModalVisible}
          onOk={() => setIsBasicModalVisible(false)}
          onCancel={() => setIsBasicModalVisible(false)}
        >
          <p>{t('modals.someContent')}</p>
          <p>{t('modals.someContent')}</p>
          <p>{t('modals.someContent')}</p>
        </Modal>
      </S.Card>
      <S.Card title={t('modals.sizes')}>
        <Button type="primary" onClick={() => setIsSmallModalVisible(true)}>
          {t('modals.small')}
        </Button>
        <Button type="primary" onClick={() => setIsMiddleModalVisible(true)}>
          {t('modals.middle')}
        </Button>
        <Button type="primary" onClick={() => setIsLargeModalVisible(true)}>
          {t('modals.large')}
        </Button>
        <Button type="primary" onClick={() => setIsFullscreenModalVisible(true)}>
          {t('modals.fullscreen')}
        </Button>
        <Modal
          title={t('modals.smallTitle')}
          centered
          visible={isSmallModalVisible}
          onOk={() => setIsSmallModalVisible(false)}
          onCancel={() => setIsSmallModalVisible(false)}
          size="small"
        >
          <p>{t('modals.someContent')}</p>
          <p>{t('modals.someContent')}</p>
          <p>{t('modals.someContent')}</p>
        </Modal>
        <Modal
          title={t('modals.middleTitle')}
          centered
          visible={isMiddleModalVisible}
          onOk={() => setIsMiddleModalVisible(false)}
          onCancel={() => setIsMiddleModalVisible(false)}
          size="medium"
        >
          <p>{t('modals.someContent')}</p>
          <p>{t('modals.someContent')}</p>
          <p>{t('modals.someContent')}</p>
        </Modal>
        <Modal
          title={t('modals.largeTitle')}
          centered
          visible={isLargeModalVisible}
          onOk={() => setIsLargeModalVisible(false)}
          onCancel={() => setIsLargeModalVisible(false)}
          size="large"
        >
          <p>{t('modals.someContent')}</p>
          <p>{t('modals.someContent')}</p>
          <p>{t('modals.someContent')}</p>
        </Modal>
        <Modal
          title={t('modals.fullscreenTitle')}
          centered
          visible={isFullscreenModalVisible}
          onOk={() => setIsFullscreenModalVisible(false)}
          onCancel={() => setIsFullscreenModalVisible(false)}
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
  );
};

export default ModalsPage;
