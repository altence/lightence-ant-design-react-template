import * as S from '../StepForm.styles';

interface Field {
  name?: string;
  value: string;
}

interface Step4Props {
  formValues: Field[];
}

export const Step4: React.FC<Step4Props> = ({ formValues }) => {
  return (
    <S.Details key="4">
      {formValues
        .filter((item) => !!item.value)
        .map((item: Field, index: number) => {
          return (
            <S.DetailsRow key={index}>
              <S.DetailsTitle>{item.name}</S.DetailsTitle>
              <S.DetailsValue>{item.value}</S.DetailsValue>
            </S.DetailsRow>
          );
        })}
    </S.Details>
  );
};
