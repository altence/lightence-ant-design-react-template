import React from 'react';
import { Col, Row, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Button } from '@app/components/common/buttons/Button/Button';
import { NFTCard } from '@app/components/NFT/NFTCard/NFTCard';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import * as S from './Balance.styles';

const { Title } = Typography;

export const Balance: React.FC = () => {
  const { t } = useTranslation();

  const usdValue = 3040.51;
  const ethValue = 1040.51;
  const btcValue = 5373.51;

  return (
    <Row>
      <Col span={24}>
        <Title level={5}>{t('nft.yourBalance')}:</Title>
      </Col>

      <Col span={24}>
        <NFTCard>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <Row gutter={[14, 14]}>
                <Col span={24}>
                  <S.TitleBalanceText level={3}>
                    {getCurrencyPrice(formatNumberWithCommas(usdValue), 'USD')}
                  </S.TitleBalanceText>
                </Col>

                <Col span={24}>
                  <Row gutter={[26, 26]} wrap={false}>
                    <Col>
                      <S.SubtitleBalanceText>
                        {getCurrencyPrice(formatNumberWithCommas(ethValue), 'ETH')}
                      </S.SubtitleBalanceText>
                    </Col>

                    <Col>
                      <S.SubtitleBalanceText>
                        {getCurrencyPrice(formatNumberWithCommas(btcValue), 'BTC')}
                      </S.SubtitleBalanceText>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Button type="primary" icon={<PlusOutlined />} block>
                {t('nft.topUpBalance')}
              </Button>
            </Col>
          </Row>
        </NFTCard>
      </Col>
    </Row>
  );
};
