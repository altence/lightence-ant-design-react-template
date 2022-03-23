import { Typography } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  --round-slider-handle-cursor: grabbing;
  --round-slider-path-width: 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  box-shadow: 0 0 25px rgba(76, 107, 167, 0.4);
  width: 7rem;
  height: 7rem;
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
`;

export const Label = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;

export const Text = styled(Typography.Text)`
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};

  font-size: ${(props) => props.theme.commonFontSizes.xl};
`;
