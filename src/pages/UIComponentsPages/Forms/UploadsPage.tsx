/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, message } from 'antd';
import { Upload, UploadDragger } from 'components/common/Upload/Upload';
import { Button } from 'components/common/buttons/Button/Button';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import theme from 'styles/theme';
import * as S from '../UIComponentsPage.styles';

const DraggerIconWrapper = styled.div`
  font-size: 4rem;
  color: ${theme.colors.main.primary};
`;
const DraggerTitle = styled.div`
  font-size: ${theme.commonFontSizes.xl};
  font-weight: ${theme.commonFontWeight.bold};
`;
const DraggerDescription = styled.div`
  font-size: ${theme.commonFontSizes.md};
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
  );
};

export default UploadsPage;
