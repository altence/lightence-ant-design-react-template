import { useTranslation } from 'react-i18next';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';
import { BaseBadge } from '@app/components/common/BaseBadge/BaseBadge';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BASE_COLORS } from '@app/styles/themes/constants';
import { BaseTooltip } from '@app/components/common/BaseTooltip/BaseTooltip';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const AvatarsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.avatar')}</PageTitle>
      <BaseCol>
        <S.Card title={t('dataDisplay.avatars.sizes')}>
          <BaseAvatar size="small" icon={<UserOutlined />} />
          <BaseAvatar icon={<UserOutlined />} />
          <BaseAvatar size="large" icon={<UserOutlined />} />
          <BaseAvatar size={64} icon={<UserOutlined />} />
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.shapes')}>
          <BaseAvatar size={45} icon={<UserOutlined />} />
          <BaseAvatar size={45} shape="square" icon={<UserOutlined />} />
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.groups')}>
          <BaseAvatar.Group
            maxCount={2}
            size={45}
            maxStyle={{ color: BASE_COLORS.red, backgroundColor: BASE_COLORS.orange }}
          >
            <BaseAvatar size={45} src="https://joeschmoe.io/api/v1/random" />
            <BaseAvatar size={45} style={{ backgroundColor: BASE_COLORS.red }}>
              K
            </BaseAvatar>
            <BaseTooltip title={t('dataDisplay.avatars.user')} placement="top">
              <BaseAvatar size={45} style={{ backgroundColor: BASE_COLORS.green }} icon={<UserOutlined />} />
            </BaseTooltip>
            <BaseAvatar size={45} style={{ backgroundColor: BASE_COLORS.blue }} icon={<AntDesignOutlined />} />
          </BaseAvatar.Group>
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.badge')}>
          <BaseBadge count={1}>
            <BaseAvatar size={45} shape="square" icon={<UserOutlined />} />
          </BaseBadge>
          <BaseBadge dot>
            <BaseAvatar size={45} shape="square" icon={<UserOutlined />} />
          </BaseBadge>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default AvatarsPage;
