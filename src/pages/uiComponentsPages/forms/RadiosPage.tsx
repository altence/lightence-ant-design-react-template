import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

const RadiosPage: React.FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <PageTitle>{t('common.radio')}</PageTitle>
      <BaseCol>
        <S.Card title={t('radios.basic')}>
          <BaseRadio>{t('radios.radio')}</BaseRadio>
        </S.Card>
        <S.Card title={t('radios.disabledRadio')}>
          <BaseSpace direction="vertical" size={20}>
            <div>
              <BaseRadio defaultChecked={false} disabled={disabled}>
                {t('radios.disabled')}
              </BaseRadio>
              <BaseRadio defaultChecked disabled={disabled}>
                {t('radios.disabled')}
              </BaseRadio>
            </div>
            <BaseButton type="primary" onClick={() => toggleDisabled()}>
              {t('radios.toggleDisabled')}
            </BaseButton>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('radios.radioGroup')}>
          <BaseRadio.Group onChange={(event) => setValue(event.target.value)} value={value}>
            <BaseRadio value={1}>{t('radios.a')}</BaseRadio>
            <BaseRadio value={2}>{t('radios.b')}</BaseRadio>
            <BaseRadio value={3}>{t('radios.c')}</BaseRadio>
            <BaseRadio value={4}>{t('radios.d')}</BaseRadio>
          </BaseRadio.Group>
        </S.Card>
        <S.Card title={t('radios.radioButton')}>
          <BaseSpace direction="vertical" size={20}>
            <BaseRadio.Group defaultValue="a">
              <BaseRadio.Button value="a">Hangzhou</BaseRadio.Button>
              <BaseRadio.Button value="b">Shanghai</BaseRadio.Button>
              <BaseRadio.Button value="c">Beijing</BaseRadio.Button>
              <BaseRadio.Button value="d">Chengdu</BaseRadio.Button>
            </BaseRadio.Group>
            <BaseRadio.Group disabled onChange={(event) => setValue(event.target.value)} defaultValue="a">
              <BaseRadio.Button value="a">Hangzhou</BaseRadio.Button>
              <BaseRadio.Button value="b">Shanghai</BaseRadio.Button>
              <BaseRadio.Button value="c">Beijing</BaseRadio.Button>
              <BaseRadio.Button value="d">Chengdu</BaseRadio.Button>
            </BaseRadio.Group>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('radios.radioButtonSizes')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseRadio.Group size="small" defaultValue="a">
              <BaseRadio.Button value="a">Hangzhou</BaseRadio.Button>
              <BaseRadio.Button value="b">Shanghai</BaseRadio.Button>
              <BaseRadio.Button value="c">Beijing</BaseRadio.Button>
              <BaseRadio.Button value="d">Chengdu</BaseRadio.Button>
            </BaseRadio.Group>
            <BaseRadio.Group defaultValue="a">
              <BaseRadio.Button value="a">Hangzhou</BaseRadio.Button>
              <BaseRadio.Button value="b">Shanghai</BaseRadio.Button>
              <BaseRadio.Button value="c">Beijing</BaseRadio.Button>
              <BaseRadio.Button value="d">Chengdu</BaseRadio.Button>
            </BaseRadio.Group>
            <BaseRadio.Group size="large" defaultValue="a">
              <BaseRadio.Button value="a">Hangzhou</BaseRadio.Button>
              <BaseRadio.Button value="b">Shanghai</BaseRadio.Button>
              <BaseRadio.Button value="c">Beijing</BaseRadio.Button>
              <BaseRadio.Button value="d">Chengdu</BaseRadio.Button>
            </BaseRadio.Group>
          </BaseSpace>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default RadiosPage;
