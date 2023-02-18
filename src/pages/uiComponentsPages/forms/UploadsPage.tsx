/* eslint-disable @typescript-eslint/no-explicit-any */
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BaseUpload } from '@app/components/common/BaseUpload/BaseUpload';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import { notificationController } from '@app/controllers/notificationController';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const DraggerIconWrapper = styled.div`
  font-size: 4rem;
  color: var(--primary-color);
`;
const DraggerTitle = styled.div`
  font-size: ${FONT_SIZE.xl};
  font-weight: ${FONT_WEIGHT.bold};
`;
const DraggerDescription = styled.div`
  font-size: ${FONT_SIZE.md};
  padding: 0 1rem;
`;

const UploadsPage: React.FC = () => {
  const { t } = useTranslation();

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: (info: any) => {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        notificationController.success({ message: t('uploads.successUpload', { name: info.file.name }) });
      } else if (status === 'error') {
        notificationController.error({ message: t('uploads.failedUpload', { name: info.file.name }) });
      }
    },
  };

  return (
    <>
      <PageTitle>{t('common.upload')}</PageTitle>
      <BaseCol>
        <S.Card title={t('uploads.basic')}>
          <BaseUpload {...uploadProps}>
            <BaseButton icon={<UploadOutlined />}>{t('uploads.clickToUpload')}</BaseButton>
          </BaseUpload>
        </S.Card>
        <S.Card title={t('uploads.directory')}>
          <BaseUpload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
            <BaseButton icon={<UploadOutlined />}>{t('uploads.directory')}</BaseButton>
          </BaseUpload>
        </S.Card>
        <S.Card title={t('uploads.dragger')}>
          <BaseUpload.Dragger {...uploadProps}>
            <DraggerIconWrapper>
              <InboxOutlined />
            </DraggerIconWrapper>
            <DraggerTitle>{t('uploads.dragUpload')}</DraggerTitle>
            <DraggerDescription>{t('uploads.bulkUpload')}</DraggerDescription>
          </BaseUpload.Dragger>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default UploadsPage;
