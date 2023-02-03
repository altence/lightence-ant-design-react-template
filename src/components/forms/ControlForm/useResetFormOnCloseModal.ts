import { useEffect, useRef } from 'react';
import { FormInstance } from 'antd';

export const useResetFormOnCloseModal = ({ form, open }: { form: FormInstance; open: boolean }): void => {
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
