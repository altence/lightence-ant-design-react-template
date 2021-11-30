import { Steps as AntdSteps, StepsProps, StepProps } from 'antd';
import * as S from './Steps.styles';

const { Step: AntdStep } = AntdSteps;

export const Steps: React.FC<StepsProps> = ({ children, ...otherProps }) => {
  return (
    <S.Steps className="steps" {...otherProps}>
      {children}
    </S.Steps>
  );
};

export const Step: React.FC<StepProps> = (props) => {
  return <AntdStep {...props} />;
};
