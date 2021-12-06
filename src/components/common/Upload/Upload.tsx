import { Upload as AntdUpload, UploadProps } from 'antd';

export const { Dragger: UploadDragger } = AntdUpload;

export const Upload: React.FC<UploadProps> = (props) => {
  return <AntdUpload {...props} />;
};
