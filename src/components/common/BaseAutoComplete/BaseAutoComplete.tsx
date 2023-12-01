import * as S from './BaseAutoComplete.styles';

export type { AutoCompleteProps as BaseAutoCompleteProps } from 'antd';

export const BaseAutoComplete : React.FC = (props) => {
    return <S.AutoComplete {...props} />;
}