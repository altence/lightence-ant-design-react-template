import React from 'react';
import { BarChartOutlined, CalendarOutlined, CheckOutlined, FileTextOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Card } from '../../common/Card/Card';
import { patientResultStatus } from '../../../constants/patientResultStatus';
import { patientResultsData } from '../../../constants/patientResultsData';
import { Dates } from '../../../constants/Dates';
import * as S from './PatientResultsCard.styles';

const icons = [<CheckOutlined key={0} />, <BarChartOutlined key={1} />, <FileTextOutlined key={2} />];

export const PatientResultsCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card id="timeline" title={t('dashboard.patientResults.title')}>
      <S.Wrapper>
        {patientResultsData.map((item, index) => {
          const content: React.ReactElement[] = [];

          patientResultStatus.forEach((status) => {
            if (item.status === status.id) {
              content.push(
                <S.Item key={item.id}>
                  <S.IconWrapper isActive={item.isActive}>{icons[index]}</S.IconWrapper>
                  <S.InfoWrapper>
                    <S.InfoHeader>
                      <S.Title isActive={item.isActive}>{t(status.name)}</S.Title>
                      <S.DateWrapper>
                        <CalendarOutlined />
                        <S.Text>{Dates.format(item.date, 'L')}</S.Text>
                      </S.DateWrapper>
                    </S.InfoHeader>
                    <S.Description>{t(status.desc)}</S.Description>
                  </S.InfoWrapper>
                </S.Item>,
              );
            }
          });

          return content;
        })}
      </S.Wrapper>
    </Card>
  );
};
