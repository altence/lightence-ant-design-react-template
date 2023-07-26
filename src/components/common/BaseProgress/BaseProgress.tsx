import React from 'react';
import { ProgressProps, Progress } from 'antd';

export type BaseProgressProps = ProgressProps;

export const BaseProgress: React.FC<ProgressProps> = (props) => {
  return <Progress {...props} />;
};
