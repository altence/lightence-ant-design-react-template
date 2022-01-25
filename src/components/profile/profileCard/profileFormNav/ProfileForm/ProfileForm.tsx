import React from 'react';
import { Form, FormProps } from 'components/common/Form/Form';
import * as S from './ProfileForm.styles';

export const ProfileForm: React.FC<FormProps> = ({ footer, children, ...props }) => (
  <Form
    {...props}
    requiredMark={false}
    footer={footer ? footer : (loading, onCancel) => <S.Buttons onCancel={onCancel} loading={loading} />}
  >
    {children}
  </Form>
);
