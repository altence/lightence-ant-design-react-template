import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BasePopover } from '@app/components/common/BasePopover/BasePopover';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { media } from '@app/styles/themes/constants';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const buttonWidth = 70;

export const PopoverButton = styled.div`
  display: flex;
  gap: 5px;
`;

export const TopButtons = styled(PopoverButton)`
  white-space: nowrap;

  @media only screen and ${media.xs} {
    margin-left: ${buttonWidth - 24}px;
  }

  @media only screen and ${media.md} {
    margin-left: ${buttonWidth + 18}px;
  }
`;
export const LeftButtons = styled(PopoverButton)`
  flex-direction: column;
  width: ${buttonWidth}px;
  float: left;
`;

export const RightButtons = styled(PopoverButton)`
  flex-direction: column;
  width: ${buttonWidth}px;

  @media only screen and ${media.xs} {
    margin-left: ${buttonWidth * 3 - 14}px;
  }

  @media only screen and ${media.md} {
    margin-left: ${buttonWidth * 4}px;
  }
`;

export const BottomButtons = styled(PopoverButton)`
  margin-left: ${buttonWidth}px;
  clear: both;
  white-space: nowrap;

  @media only screen and ${media.xs} {
    margin-left: ${buttonWidth - 44}px;
  }

  @media only screen and ${media.md} {
    margin-left: ${buttonWidth}px;
  }
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
    <>
      <PageTitle>{t('common.popover')}</PageTitle>
      <BaseCol>
        <S.Card title={t('popovers.basic')}>
          <BasePopover content={content} title={title}>
            <BaseButton type="primary">{t('popovers.hover')}</BaseButton>
          </BasePopover>
        </S.Card>
        <S.Card title={t('popovers.positions')}>
          <div>
            <TopButtons>
              <BasePopover placement="topLeft" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.tl')}</BaseButton>
              </BasePopover>
              <BasePopover placement="top" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.top')}</BaseButton>
              </BasePopover>
              <BasePopover placement="topRight" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.tr')}</BaseButton>
              </BasePopover>
            </TopButtons>
            <LeftButtons>
              <BasePopover placement="leftTop" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.lt')}</BaseButton>
              </BasePopover>
              <BasePopover placement="left" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.left')}</BaseButton>
              </BasePopover>
              <BasePopover placement="leftBottom" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.lb')}</BaseButton>
              </BasePopover>
            </LeftButtons>
            <RightButtons>
              <BasePopover placement="rightTop" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.rt')}</BaseButton>
              </BasePopover>
              <BasePopover placement="right" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.right')}</BaseButton>
              </BasePopover>
              <BasePopover placement="rightBottom" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.rb')}</BaseButton>
              </BasePopover>
            </RightButtons>
            <BottomButtons>
              <BasePopover placement="bottomLeft" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.bl')}</BaseButton>
              </BasePopover>
              <BasePopover placement="bottom" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.bottom')}</BaseButton>
              </BasePopover>
              <BasePopover placement="bottomRight" title={title} content={content} trigger="click">
                <BaseButton>{t('popovers.br')}</BaseButton>
              </BasePopover>
            </BottomButtons>
          </div>
        </S.Card>
        <S.Card title={t('popovers.triggers')}>
          <BasePopover content={content} title={title} trigger="hover">
            <BaseButton>{t('popovers.hover')}</BaseButton>
          </BasePopover>
          <BasePopover content={content} title={title} trigger="focus">
            <BaseButton>{t('popovers.focus')}</BaseButton>
          </BasePopover>
          <BasePopover content={content} title={title} trigger="click">
            <BaseButton>{t('popovers.click')}</BaseButton>
          </BasePopover>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default PopoversPage;
