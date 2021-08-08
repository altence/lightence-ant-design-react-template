import { BellOutlined } from '@ant-design/icons';
import { Badge, Button, Divider, Typography } from 'antd';
import React, { useMemo } from 'react';
import styled from 'styled-components';

interface TreatmentPanelProps {
  date: string;
}

export const TreatmentPanel: React.FC<TreatmentPanelProps> = ({ date }) => {
  return (
    <Wrapper>
      <Text>{date}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 5px 40px #e6e6e6;
  padding: 3.75rem 1rem 1rem 1rem;
  text-align: center;
  position: relative;
  margin-left: 3rem;

  background-color: ${(props) => props.theme.colors.secondary};
`;

const Notification = styled.div`
  position: absolute;
  top: 5%;
  right: 10%;
`;

const BellStyled = styled(BellOutlined)`
  font-size: 1.25rem;

  color: ${(props) => props.theme.colors.primary};
`;

const Title = styled(Typography.Text)`
  display: block;
  line-height: 3rem;
  font-size: 3rem;
  font-weight: 700;

  color: ${(props) => props.theme.colors.primary};
`;

const Subtitle = styled(Typography.Text)`
  display: block;
  font-size: 1.3rem;
  font-weight: 700;

  color: ${(props) => props.theme.colors.primary};
`;

const DividerStyled = styled(Divider)`
  margin: 0.5rem 0;
`;

const Text = styled(Typography.Text)`
  display: block;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1.8rem;
`;

const ButtonStyled = styled(Button)`
  font-weight: 500;
`;

{
  /* <Notification>
<Badge color="red">
  <BellStyled />
</Badge>
</Notification>
<Title>{dateNumber}</Title>
<Subtitle>{dateMonth}</Subtitle>
<DividerStyled />
<Text>{dateTime}</Text>
<ButtonStyled size="large" type="primary">
Confirm
</ButtonStyled> */
}
