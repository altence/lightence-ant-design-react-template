import { BaseFormInstance } from '@app/components/common/forms/BaseForm/BaseForm';
import { useEffect, useRef } from 'react';

export const useResetFormOnCloseModal = ({ form, open }: { form: BaseFormInstance; open: boolean }): void => {
  const prevOpenRef = useRef<boolean>();
  useEffect(() => {
    prevOpenRef.current = open;
  }, [open]);
  const prevOpen = prevOpenRef.current;

  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [open, form, prevOpen]);
};
