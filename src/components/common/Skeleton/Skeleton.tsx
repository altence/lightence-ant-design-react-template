import React from 'react';
import { Skeleton as AntdSkeleton, SkeletonProps } from 'antd';
import * as S from './Skeleton.styles';

export const {
  Button: SkeletonButton,
  Input: SkeletonInput,
  Avatar: SkeletonAvatar,
  Image: SkeletonImage,
} = AntdSkeleton;

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <S.Skeleton {...props} />;
};
