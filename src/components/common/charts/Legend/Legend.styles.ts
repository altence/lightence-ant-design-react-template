import styled from 'styled-components';
import { InfoCircleOutlined } from '@ant-design/icons/lib';
import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';

interface LegendWrapperProps {
  isSelected: boolean;
}

export const LegendWrapper = styled.div<LegendWrapperProps>`
  display: flex;
  padding: 0.5rem;
  background: ${(props) => (props.isSelected ? 'var(--secondary-background-selected-color)' : 'transparent')};
  border-radius: ${BORDER_RADIUS};
`;

export const LegendInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: var(--text-superLight-color);
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
  font-weight: ${FONT_WEIGHT.semibold};
  color: var(--text-main-color);
  display: flex;
  justify-content: space-between;

  @media only screen and ${media.xs} {
    font-size: ${FONT_SIZE.xs};
  }

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.md};
  }
`;

export const InfoStyled = styled(InfoCircleOutlined)`
  cursor: pointer;
  margin-left: 0.5rem;

  color: var(--text-main-color);
`;

export const PopoverContent = styled.div`
  max-width: 15rem;
`;

export const Values = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  color: var(--primary-color);

  @media only screen and ${media.md} {
    margin-left: 1.5rem;
  }
`;
