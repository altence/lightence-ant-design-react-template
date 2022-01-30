import { useEffect, useRef } from 'react';
import { FormInstance } from 'antd';

export const useResetFormOnCloseModal = ({ form, visible }: { form: FormInstance; visible: boolean }): void => {
  const prevVisibleRef = useRef<boolean>();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;

  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible, form, prevVisible]);
};
