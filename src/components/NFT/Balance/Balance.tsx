import React from 'react';
import { Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Card } from '@app/components/common/Card/Card';
import { Button } from '@app/components/common/buttons/Button/Button';
import * as S from './Balance.styles';

export const Balance: React.FC = () => {
  return (
    <Card autoHeight={false}>
      <Row gutter={[30, 30]}>
        <Col span={24}>
          <Row gutter={[14, 14]}>
            <Col span={24}>
              <S.TitleBalanceText level={3}>$3,040.51</S.TitleBalanceText>
            </Col>

            <Col span={24}>
              <Row gutter={[26, 26]} wrap={false}>
                <Col>
                  <S.SubtitleBalanceText>1,040.51 ETH</S.SubtitleBalanceText>
                </Col>

                <Col>
                  <S.SubtitleBalanceText>5,373.51 BTC</S.SubtitleBalanceText>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Button type="primary" icon={<PlusOutlined />} block>
            Top Up Balance
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
