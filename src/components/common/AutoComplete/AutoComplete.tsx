import { ComponentProps } from 'react';
import { AutoComplete as AntAutoComplete } from 'antd';
import * as S from './AutoComplete.styles';

export const AutoComplete: React.FC<ComponentProps<typeof AntAutoComplete>> = (props) => {
  return <S.AutoComplete {...props} />;
};
