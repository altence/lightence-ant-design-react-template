import React, { useMemo } from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { Col, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Notice } from 'components/common/Notice/Notice';
import { getWordFromBigLetter } from 'helpers/getWordFromBigLetter';
import { Mention, Notice as NoticeType } from 'constants/noticesData';
import { noticesSeverities } from 'constants/noticesSeverities';
import { RoutesEnum } from 'constants/navigation';
import * as S from './NoticesOverlay.styles';

interface NoticesOverlayProps {
  notices: NoticeType[];
}

export const NoticesOverlay: React.FC<NoticesOverlayProps> = ({ notices }) => {
  const { t } = useTranslation();

  const noticesList = useMemo(
    () =>
      notices.map((notice, index) => {
        const type = noticesSeverities.find((dbSeverity) => dbSeverity.id === notice.id)?.name;

        return (
          <Notice
            key={index}
            type={type || 'warning'}
            title={getWordFromBigLetter(type || 'warning')}
            description={t(notice.description)}
            {...(type === 'mention' && {
              mentionIcon: (notice as Mention).userIcon,
              title: (notice as Mention).userName,
              description: (
                <Trans i18nKey={(notice as Mention).description}>
                  <S.LinkBtn type="link" href={(notice as Mention).href}>
                    {{ place: t((notice as Mention).place) }}
                  </S.LinkBtn>
                </Trans>
              ),
            })}
          />
        );
      }),
    [notices],
  );

  return (
    <S.NoticesOverlayMenu mode="inline">
      <S.MenuRow gutter={[20, 20]}>
        <Col span={24}>
          <Space direction="vertical" size={10} split={<S.SplitDivider />}>
            {noticesList}
          </Space>
        </Col>
        <Col span={24}>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <S.Btn type="ghost">{t('header.notices.readAll')}</S.Btn>
            </Col>
            <Col span={24}>
              <S.Btn type="link">
                <Link to={RoutesEnum.DASHBOARD_PAGE}>{t('header.notices.viewAll')}</Link>
              </S.Btn>
            </Col>
          </Row>
        </Col>
      </S.MenuRow>
    </S.NoticesOverlayMenu>
  );
};
