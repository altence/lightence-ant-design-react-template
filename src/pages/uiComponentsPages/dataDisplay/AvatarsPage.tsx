import { Col, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Group } from '@app/components/common/Avatar/Avatar';
import { Badge } from '@app/components/common/Badge/Badge';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BASE_COLORS } from '@app/styles/themes/constants';

const AvatarsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.avatar')}</PageTitle>
      <Col>
        <S.Card title={t('dataDisplay.avatars.sizes')}>
          <Avatar size="small" icon={<UserOutlined />} />
          <Avatar icon={<UserOutlined />} />
          <Avatar size="large" icon={<UserOutlined />} />
          <Avatar size={64} icon={<UserOutlined />} />
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.shapes')}>
          <Avatar size={45} icon={<UserOutlined />} />
          <Avatar size={45} shape="square" icon={<UserOutlined />} />
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.groups')}>
          <Group maxCount={2} size={45} maxStyle={{ color: BASE_COLORS.red, backgroundColor: BASE_COLORS.orange }}>
            <Avatar size={45} src="https://joeschmoe.io/api/v1/random" />
            <Avatar size={45} style={{ backgroundColor: BASE_COLORS.red }}>
              K
            </Avatar>
            <Tooltip title={t('dataDisplay.avatars.user')} placement="top">
              <Avatar size={45} style={{ backgroundColor: BASE_COLORS.green }} icon={<UserOutlined />} />
            </Tooltip>
            <Avatar size={45} style={{ backgroundColor: BASE_COLORS.blue }} icon={<AntDesignOutlined />} />
          </Group>
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.badge')}>
          <Badge count={1}>
            <Avatar size={45} shape="square" icon={<UserOutlined />} />
          </Badge>
          <Badge dot>
            <Avatar size={45} shape="square" icon={<UserOutlined />} />
          </Badge>
        </S.Card>
      </Col>
    </>
  );
};

export default AvatarsPage;
