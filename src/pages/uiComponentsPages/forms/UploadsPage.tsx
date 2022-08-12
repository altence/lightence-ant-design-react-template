/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, message } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Upload, UploadDragger } from '@app/components/common/Upload/Upload';
import { Button } from '@app/components/common/buttons/Button/Button';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';

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
        message.success(t('uploads.successUpload', { name: info.file.name }));
      } else if (status === 'error') {
        message.error(t('uploads.failedUpload', { name: info.file.name }));
      }
    },
  };

  return (
    <>
      <PageTitle>{t('common.upload')}</PageTitle>
      <Col>
        <S.Card title={t('uploads.basic')}>
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>{t('uploads.clickToUpload')}</Button>
          </Upload>
        </S.Card>
        <S.Card title={t('uploads.directory')}>
          <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
            <Button icon={<UploadOutlined />}>{t('uploads.directory')}</Button>
          </Upload>
        </S.Card>
        <S.Card title={t('uploads.dragger')}>
          <UploadDragger {...uploadProps}>
            <DraggerIconWrapper>
              <InboxOutlined />
            </DraggerIconWrapper>
            <DraggerTitle>{t('uploads.dragUpload')}</DraggerTitle>
            <DraggerDescription>{t('uploads.bulkUpload')}</DraggerDescription>
          </UploadDragger>
        </S.Card>
      </Col>
    </>
  );
};

export default UploadsPage;
