import React from 'react';
import { Col, Row } from 'antd';
import { ButtonType } from 'antd/es/button';
import { ButtonSize } from 'antd/lib/button';
import { useTranslation } from 'react-i18next';
import * as S from './ButtonsGroup.styles';

interface ButtonsGroupProps {
  className?: string;
  cancelBtnType?: ButtonType;
  saveBtnType?: ButtonType;
  onCancel: () => void;
  loading: boolean;
  size?: ButtonSize;
}

export const ButtonsGroup: React.FC<ButtonsGroupProps> = ({
  className,
  cancelBtnType = 'ghost',
  saveBtnType = 'primary',
  onCancel,
  loading,
  size,
}) => {
  const { t } = useTranslation();

  return (
    <Row className={className} gutter={[10, 0]}>
      <Col span={12}>
        <S.Btn {...(size && { size })} type={cancelBtnType} onClick={onCancel}>
          {t('common.cancel')}
        </S.Btn>
      </Col>
      <Col span={12}>
        <S.Btn {...(size && { size })} loading={loading} htmlType="submit" type={saveBtnType}>
          {t('common.save')}
        </S.Btn>
      </Col>
    </Row>
  );
};
