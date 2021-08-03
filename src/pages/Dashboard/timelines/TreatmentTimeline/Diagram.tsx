import React from 'react';
import styled from 'styled-components';
import { Divider } from 'antd';
import { BarChartOutlined, CheckOutlined, FileTextOutlined } from '@ant-design/icons';

export const Diagram: React.FC = () => {
  return (
    <Wrapper>
      <DiagramItem isActive>
        <IconWrapper>
          <CheckOutlined />
        </IconWrapper>
      </DiagramItem>
      <DividerStyled type="vertical" />
      <DiagramItem>
        <IconWrapper>
          <BarChartOutlined />
        </IconWrapper>
      </DiagramItem>
      <DividerStyled type="vertical" />
      <DiagramItem>
        <IconWrapper>
          <FileTextOutlined />
        </IconWrapper>
      </DiagramItem>
      <DividerStyled type="vertical" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

interface DiagramProps {
  isActive?: boolean;
}

const IconWrapper = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;
`;

const DiagramItem = styled.div<DiagramProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background: ${(props) => (props.isActive && props.theme.colors.primary) || props.theme.colors.additionally};

  ${(props) =>
    props.isActive &&
    `& ${IconWrapper} {
    color: ${props.theme.colors.secondary};
  }`}
`;

const DividerStyled = styled(Divider)`
  top: 0 !important;
  font-size: 3.75rem !important;
`;
