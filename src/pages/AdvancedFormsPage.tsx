import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { DynamicForm } from '@app/components/forms/DynamicForm/DynamicForm';
import { ControlForm } from '@app/components/forms/ControlForm/ControlForm';
import { ValidationForm } from '@app/components/forms/ValidationForm/ValidationForm';
import { StepForm } from '@app/components/forms/StepForm/StepForm';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const AdvancedFormsPage: React.FC = () => {
  const { t } = useTranslation();
  const padding = '1.25rem';
  return (
    <>
      <PageTitle>{t('common.advancedForms')}</PageTitle>
      <BaseRow gutter={[30, 30]}>
        <BaseCol xs={24} sm={24} xl={10}>
          <BaseCard id="validation form" title={t('forms.validationForm')} padding={padding}>
            <ValidationForm />
          </BaseCard>
        </BaseCol>

        <BaseCol xs={24} sm={24} xl={14}>
          <BaseRow gutter={[30, 30]}>
            <BaseCol span={24}>
              <BaseCard id="control-form" title={t('forms.controlForm')} padding={padding}>
                <ControlForm />
              </BaseCard>
            </BaseCol>
            <BaseCol span={24}>
              <BaseCard id="dynamic-form" title={t('forms.dynamicForm')} padding={padding}>
                <DynamicForm />
              </BaseCard>
            </BaseCol>
            <BaseCol span={24}>
              <BaseCard id="step-form" title={t('forms.stepForm')} padding={padding}>
                <StepForm />
              </BaseCard>
            </BaseCol>
          </BaseRow>
        </BaseCol>
      </BaseRow>
    </>
  );
};

export default AdvancedFormsPage;
