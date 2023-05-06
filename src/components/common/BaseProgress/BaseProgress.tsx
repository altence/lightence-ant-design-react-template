import React from 'react';
import { ProgressProps, Progress } from 'antd';

export type BaseProgressProps = ProgressProps;

export const BaseProgress: React.FC<ProgressProps> = ({
  // https://github.com/ant-design/ant-design/pull/41875
  size = 'default',
  ...props
}) => {
  return <Progress {...props} size={size} />;
};
