import React from 'react';
import { Steps, Step } from 'components/common/Steps/Steps';
import { BarChartOutlined, CheckOutlined, FileTextOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { patientResultStatus } from '../../../constants/patientResultStatus';
import { patientResultsData } from '../../../constants/patientResultsData';
import { Dates } from '../../../constants/Dates';
import { useResponsive } from 'hooks/useResponsive';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import * as S from './PatientResultsCard.styles';

const icons = [<CheckOutlined key={0} />, <BarChartOutlined key={1} />, <FileTextOutlined key={2} />];

export const PatientResultsCard: React.FC = () => {
  const { t } = useTranslation();
  const { mobileOnly } = useResponsive();

  return (
    <DashboardCard id="timeline" title={t('dashboard.patientResults.title')}>
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
                  <S.TitleWrapper>{t(status.name)}</S.TitleWrapper>
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
    </DashboardCard>
  );
};
