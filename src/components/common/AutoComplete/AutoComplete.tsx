import { AutoCompleteProps } from 'antd';
import * as S from './AutoComplete.styles';

export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  return <S.AutoComplete {...props} />;
};
