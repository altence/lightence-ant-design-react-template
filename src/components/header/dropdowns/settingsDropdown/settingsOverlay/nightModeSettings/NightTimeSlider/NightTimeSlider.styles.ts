import { Typography } from 'antd';
import styled from 'styled-components';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';

const pathWidth = 22;

export const Wrapper = styled.div`
  position: relative;
  display: flex;

  --round-slider-handle-cursor: grabbing;
  --round-slider-path-width: ${pathWidth}px;

  --round-slider-bar-color: var(--primary-color);
  --round-slider-path-color: #def0ff;
  --round-slider-handle-color: #fff;
  --round-slider-handle-border-color: var(--primary-color);

  round-slider {
    z-index: 1; // To make it under InnerWrapper
  }
`;

export const InnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  width: calc(100% - ${pathWidth * 2}px);
  height: calc(100% - ${pathWidth * 2}px);
`;

export const BackgroundWrapper = styled(InnerWrapper)`
  background: linear-gradient(
    270deg,
    rgba(1, 53, 154, 0.3) 0%,
    rgba(96, 126, 233, 0.4) 0.01%,
    rgba(79, 192, 255, 0.05) 100%
  );
`;

export const ShadowWrapper = styled(InnerWrapper)`
  box-shadow: 0px -4px 16px rgba(1, 80, 154, 0.1), 0px 4px 16px rgba(1, 80, 154, 0.1);
  z-index: 2; // To make it under slider
`;

export const Text = styled(Typography.Text)`
  font-size: ${FONT_SIZE.xs};
`;

export const TopText = styled(Text)`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
`;

export const BotText = styled(Text)`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
`;

export const LeftText = styled(Text)`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
`;

export const RightText = styled(Text)`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
`;

export const CenterText = styled(Typography.Text)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: ${FONT_SIZE.xl};

  font-weight: ${FONT_WEIGHT.semibold};
`;

export const TimeRow = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.3rem;
  width: 50%;
  border-radius: 14px;
  padding: 1rem;

  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const NumberInput = styled(InputNumber)`
  width: unset;

  input {
    font-weight: ${FONT_WEIGHT.semibold};
  }
`;
