import { Col, Row } from 'antd';
import { ButtonType } from 'antd/es/button';
import { Button } from 'components/common/buttons/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './ButtonsGroup.styles';

interface ButtonsGroupProps {
  className?: string;
  cancelBtnType?: ButtonType;
  saveBtnType?: ButtonType;
  onCancel: () => void;
  loading: boolean;
}

export const ButtonsGroup: React.FC<ButtonsGroupProps> = ({
  className,
  cancelBtnType = 'ghost',
  saveBtnType = 'primary',
  onCancel,
  loading,
}) => {
  const { t } = useTranslation();

  return (
    <Row className={className} gutter={[10, 0]}>
      <Col span={12}>
        <S.Btn type={cancelBtnType} onClick={onCancel}>
          {t('common.cancel')}
        </S.Btn>
      </Col>
      <Col span={12}>
        <S.Btn loading={loading} htmlType="submit" type={saveBtnType}>
          {t('common.save')}
        </S.Btn>
      </Col>
    </Row>
  );
};
