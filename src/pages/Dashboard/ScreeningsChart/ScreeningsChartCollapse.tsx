import { ArrowLeftOutlined, ArrowRightOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Button, Typography, Avatar } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { friends } from '../../../constants/friends';

export const ScreeningsChartCollapse: React.FC = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <Wrapper isCollapsed={isCollapsed}>
      <Header>
        <Text>Friends</Text>
        <Button
          type="text"
          icon={isCollapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
          onClick={handleCollapse}
        />
      </Header>
      <List>
        {friends.map((item) => (
          <ListItem key={item.id}>
            <Friend>
              <AvatarWrapper isCollapsed={isCollapsed}>
                <Avatar src={item.imgUrl} />
              </AvatarWrapper>
              {!isCollapsed && (
                <>
                  <Text>{item.name}</Text>
                  <Percent isDowngrade={item.isDowngrade}>
                    {item.isDowngrade ? <CaretDownOutlined /> : <CaretUpOutlined />}
                    <Text>{item.value}%</Text>
                  </Percent>
                </>
              )}
            </Friend>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

interface Collapse {
  isCollapsed: boolean;
}

const Wrapper = styled.div<Collapse>`
  padding: 1rem;
  position: absolute;
  height: 100%;
  width: ${(props) => (props.isCollapsed ? '7rem' : '12rem')};
  transition: all 0.3s ease;
  z-index: 2;
  background: ${(props) => props.theme.colors.secondary};
  opacity: 0.9;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Text = styled(Typography.Text)`
  font-size: 0.75rem;
  color: inherit;
  white-space: nowrap;
`;

const List = styled.ul`
  list-style: none;
  background: ${(props) => props.theme.colors.secondary};
`;

const ListItem = styled.li`
  margin-bottom: 0.4rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

const Friend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AvatarWrapper = styled.div<Collapse>`
  ${(props) => props.isCollapsed && 'transform: translateX(50%)'};
  transition: all 0.3s ease;
`;

interface Statistic {
  isDowngrade?: boolean;
}

const Percent = styled.div<Statistic>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.isDowngrade ? props.theme.colors.fail : props.theme.colors.success)};
`;
