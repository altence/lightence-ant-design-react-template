import styled from 'styled-components';
import { InfoCircleOutlined } from '@ant-design/icons/lib';
import { media } from '@app/utils/utils';

interface LegendWrapperProps {
  isSelected: boolean;
}

export const LegendWrapper = styled.div<LegendWrapperProps>`
  display: flex;
  padding: 0.5rem;
  background: ${(props) => (props.isSelected ? props.theme.secondaryBackgroundSelected : 'transparent')};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const LegendInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: ${({ theme }) => theme.textSuperLight};
`;

export const LegendDescription = styled.div`
  display: flex;
  margin-left: 1.25rem;
  width: 100%;
`;

export const LegendColor = styled.span`
  height: 1rem;
  width: 1rem;
  min-width: 1rem;
  border-radius: 50%;
`;

export const LegendTitle = styled.div`
  line-height: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.textMain};
  display: flex;
  justify-content: space-between;

  @media only screen and (${media('xs')}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const InfoStyled = styled(InfoCircleOutlined)`
  cursor: pointer;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.textMain};
`;

export const PopoverContent = styled.div`
  max-width: 15rem;
`;

export const Values = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.primary};

  @media only screen and (${media('md')}) {
    margin-left: 1.5rem;
  }
`;
