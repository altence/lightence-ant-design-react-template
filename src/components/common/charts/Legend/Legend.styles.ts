import { shadeColor } from '@app/utils/utils';
import styled from 'styled-components';
import { InfoCircleOutlined } from '@ant-design/icons/lib';

interface LegendWrapperProps {
  isSelected: boolean;
}

export const LegendWrapper = styled.div<LegendWrapperProps>`
  display: flex;
  padding: 0.5rem;
  background: ${(props) =>
    props.isSelected ? shadeColor(props.theme.colors.main.secondaryBackground, -5) : 'transparent'};
  border-radius: ${(props) => props.theme.border.radius};
`;

export const LegendInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: ${(props) => props.theme.colors.text.superLight};
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
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  color: ${(props) => props.theme.colors.text.main};
  display: flex;
  justify-content: space-between;

  @media only screen and ${(props) => props.theme.media.xs} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;

export const InfoStyled = styled(InfoCircleOutlined)`
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const PopoverContent = styled.div`
  max-width: 15rem;
`;

export const Values = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colors.main.primary};

  @media only screen and ${(props) => props.theme.media.md} {
    margin-left: 1.5rem;
  }
`;
