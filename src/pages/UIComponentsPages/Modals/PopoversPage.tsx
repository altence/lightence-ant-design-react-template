import { Col } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { Popover } from 'components/common/Popover/Popover';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import * as S from '../UIComponentsPage.styles';

const buttonWidth = 70;

export const PopoverButton = styled.div`
  display: flex;
  gap: 5px;
`;

export const TopButtons = styled(PopoverButton)`
  whitespace: nowrap;
  margin-left: ${buttonWidth + 18}px;
`;
export const LeftButtons = styled(PopoverButton)`
  flex-direction: column;
  width: ${buttonWidth}px;
  float: left;
`;

export const RightButtons = styled(PopoverButton)`
  flex-direction: column;
  width: ${buttonWidth}px;
  margin-left: ${buttonWidth * 4}px;
`;

export const BottomButtons = styled(PopoverButton)`
  margin-left: ${buttonWidth}px;
  clear: both;
  whitespace: nowrap;
`;

const PopoversPage: React.FC = () => {
  const { t } = useTranslation();

  const title = <span>{t('popovers.title')}</span>;
  const content = (
    <div>
      <p>{t('popovers.content')}</p>
      <p>{t('popovers.content')}</p>
    </div>
  );

  return (
    <Col>
      <S.Card title={t('popovers.basic')}>
        <Popover content={content} title={title}>
          <Button type="primary">{t('popovers.hover')}</Button>
        </Popover>
      </S.Card>
      <S.Card title={t('popovers.positions')}>
        <div>
          <TopButtons>
            <Popover placement="topLeft" title={title} content={content} trigger="click">
              <Button>{t('popovers.tl')}</Button>
            </Popover>
            <Popover placement="top" title={title} content={content} trigger="click">
              <Button>{t('popovers.top')}</Button>
            </Popover>
            <Popover placement="topRight" title={title} content={content} trigger="click">
              <Button>{t('popovers.tr')}</Button>
            </Popover>
          </TopButtons>
          <LeftButtons>
            <Popover placement="leftTop" title={title} content={content} trigger="click">
              <Button>{t('popovers.lt')}</Button>
            </Popover>
            <Popover placement="left" title={title} content={content} trigger="click">
              <Button>{t('popovers.left')}</Button>
            </Popover>
            <Popover placement="leftBottom" title={title} content={content} trigger="click">
              <Button>{t('popovers.lb')}</Button>
            </Popover>
          </LeftButtons>
          <RightButtons>
            <Popover placement="rightTop" title={title} content={content} trigger="click">
              <Button>{t('popovers.rt')}</Button>
            </Popover>
            <Popover placement="right" title={title} content={content} trigger="click">
              <Button>{t('popovers.right')}</Button>
            </Popover>
            <Popover placement="rightBottom" title={title} content={content} trigger="click">
              <Button>{t('popovers.rb')}</Button>
            </Popover>
          </RightButtons>
          <BottomButtons>
            <Popover placement="bottomLeft" title={title} content={content} trigger="click">
              <Button>{t('popovers.bl')}</Button>
            </Popover>
            <Popover placement="bottom" title={title} content={content} trigger="click">
              <Button>{t('popovers.bottom')}</Button>
            </Popover>
            <Popover placement="bottomRight" title={title} content={content} trigger="click">
              <Button>{t('popovers.br')}</Button>
            </Popover>
          </BottomButtons>
        </div>
      </S.Card>
      <S.Card title={t('popovers.triggers')}>
        <Popover content={content} title={title} trigger="hover">
          <Button>{t('popovers.hover')}</Button>
        </Popover>
        <Popover content={content} title={title} trigger="focus">
          <Button>{t('popovers.focus')}</Button>
        </Popover>
        <Popover content={content} title={title} trigger="click">
          <Button>{t('popovers.click')}</Button>
        </Popover>
      </S.Card>
    </Col>
  );
};

export default PopoversPage;
