import React from 'react';
import { BarChartOutlined, CalendarOutlined, CheckOutlined, FileTextOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { Card } from '../../common/Card/Card';
import { patientTimelineData } from '../../../constants/patientTimelineData';
import { Dates } from '../../../constants/Dates';
import { media } from '../../../styles/theme';
import * as S from './PatientTimelineCard.styles';

const icons = [<CheckOutlined key={0} />, <BarChartOutlined key={1} />, <FileTextOutlined key={2} />];

export const PatientTimelineCard: React.FC = () => {
  const isBigScreen = useMediaQuery({ query: media.xxl });

  return (
    <Card title="Patient timeline" padding={(isBigScreen && '1rem 2.5rem') || '0.625rem 0.875rem'}>
      <S.Wrapper>
        {patientTimelineData.map((item, index) => (
          <S.Item key={item.id}>
            <S.IconWrapper isActive={item.isActive}>{icons[index]}</S.IconWrapper>
            <S.InfoWrapper>
              <S.InfoHeader>
                <S.Title isActive={item.isActive}>{item.title}</S.Title>
                <S.DateWrapper>
                  <CalendarOutlined />
                  <S.Text>{Dates.format(item.date, 'L')}</S.Text>
                </S.DateWrapper>
              </S.InfoHeader>
              <S.Description>{item.description}</S.Description>
            </S.InfoWrapper>
          </S.Item>
        ))}
      </S.Wrapper>
    </Card>
  );
};
