import React from 'react';
import { Steps, Step } from 'components/common/Steps/Steps';
import { BarChartOutlined, CheckOutlined, FileTextOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Card } from '../../common/Card/Card';
import { patientResultStatus } from '../../../constants/patientResultStatus';
import { patientResultsData } from '../../../constants/patientResultsData';
import { Dates } from '../../../constants/Dates';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './PatientResultsCard.styles';

const icons = [<CheckOutlined key={0} />, <BarChartOutlined key={1} />, <FileTextOutlined key={2} />];

export const PatientResultsCard: React.FC = () => {
  const { t } = useTranslation();
  const { mobileOnly } = useResponsive();

  return (
    <Card id="timeline" title={t('dashboard.patientResults.title')} padding="0 1.25rem">
      <Steps direction="vertical" size="small" current={0}>
        {patientResultStatus.map((status, index) => {
          const patientResult = patientResultsData.find((item) => item.status === status.id) || {
            isActive: false,
            date: new Date().toUTCString(),
          };
          return (
            <Step
              title={
                mobileOnly ? (
                  <S.MobileTitleWrapper>
                    <span>{t(status.name)}</span>
                    <S.DateWrapper>
                      <S.CalendarIcon />
                      <S.Text>{Dates.format(patientResult?.date, 'D MMMM YYYY')}</S.Text>
                    </S.DateWrapper>
                  </S.MobileTitleWrapper>
                ) : (
                  t(status.name)
                )
              }
              description={
                <S.InfoWrapper>
                  {!mobileOnly && (
                    <S.DateWrapper>
                      <S.CalendarIcon />
                      <S.Text>{Dates.format(patientResult?.date, 'D MMMM YYYY')}</S.Text>
                    </S.DateWrapper>
                  )}
                  <S.Description>{t(status.desc)}</S.Description>
                </S.InfoWrapper>
              }
              key={status.id}
              icon={<S.IconWrapper isActive={patientResult.isActive}>{icons[index]}</S.IconWrapper>}
            />
          );
        })}
      </Steps>
    </Card>
  );
};
