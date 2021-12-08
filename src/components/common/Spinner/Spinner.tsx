import { SpinProps } from 'antd';
import * as S from './Spinner.styles';

export const Spinner: React.FC<SpinProps> = (props) => {
  return <S.Spinner {...props} />;
};
