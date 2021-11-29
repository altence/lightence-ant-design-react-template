import styled from 'styled-components';

interface LegendWrapperProps {
  isSelected: boolean;
}

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & ::-webkit-scrollbar {
    width: 0.7rem;
  }
  & ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  & ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.commonColors.lightgrey};
    border-radius: 1.25rem;
    border: 0.275rem solid transparent;
    background-clip: content-box;
  }

  @media only screen and ${(props) => props.theme.media.xs} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Legend = styled.div`
  max-height: 16.25rem;
  overflow-y: scroll;
  margin-bottom: 1.875rem;
  width: 100%;

  @media only screen and ${(props) => props.theme.media.xs} {
    margin-left: 0;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    margin-left: 1.875rem;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    margin-left: 0;
  }
`;

export const LegendWrapper = styled.div<LegendWrapperProps>`
  display: flex;
  padding: 1rem;
  background: ${(props) => (props.isSelected ? '#ECF6FF' : 'transparent')};
  border-radius: ${(props) => props.theme.border.radius};
`;

export const LegendInfo = styled.div`
  display: flex;
  width: 100%;
`;

export const LegendDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
  width: 100%;
`;

export const LegendColor = styled.div`
  height: 0.84375rem;
  min-width: 0.84375rem;
  border-radius: 50%;
  margin-top: 0.1875rem;
`;

export const LegendTitle = styled.div`
  line-height: 1.375rem;
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  color: ${(props) => props.theme.colors.text.main};
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: space-between;

  @media only screen and ${(props) => props.theme.media.xs} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;

export const LegendText = styled.div`
  line-height: 1.25rem;
  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${(props) => props.theme.media.xs} {
    font-size: ${(props) => props.theme.commonFontSizes.xxs};
  }

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }
`;

export const LegendPercent = styled(LegendText)`
  margin-left: 0.8125rem;
  margin-right: 1rem;

  @media only screen and ${(props) => props.theme.media.xs} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }
`;

export const LegendDayUp = styled(LegendText)`
  color: #57d682;
  display: flex;
  align-items: center;

  @media only screen and ${(props) => props.theme.media.xs} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }
`;

export const Values = styled.div`
  display: flex;
`;
