import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Button } from '@app/components/common/buttons/Button/Button';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import { getBalance } from '@app/api/earnings.api';
import * as S from './Balance.styles';

export const Balance: React.FC = () => {
  const [balance, setBalance] = useState({
    usd_balance: 0,
    eth_balance: 0,
    btc_balance: 0,
  });

  const userId = useAppSelector((state) => state.user.user?.id);

  useEffect(() => {
    userId && getBalance(userId).then((res) => setBalance(res));
  }, [userId]);

  const { t } = useTranslation();

  return (
    <Row>
      <Col span={24}>
        <S.TitleText level={5}>{t('nft.yourBalance')}:</S.TitleText>
      </Col>

      <Col span={24}>
        <NFTCard>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <Row gutter={[14, 14]}>
                <Col span={24}>
                  <S.TitleBalanceText level={3}>
                    {getCurrencyPrice(formatNumberWithCommas(balance.usd_balance), 'USD')}
                  </S.TitleBalanceText>
                </Col>

                <Col span={24}>
                  <Row gutter={[26, 26]} wrap={false}>
                    <Col>
                      <S.SubtitleBalanceText>
                        {getCurrencyPrice(formatNumberWithCommas(balance.eth_balance), 'ETH', false)}
                      </S.SubtitleBalanceText>
                    </Col>

                    <Col>
                      <S.SubtitleBalanceText>
                        {getCurrencyPrice(formatNumberWithCommas(balance.btc_balance), 'BTC', false)}
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
