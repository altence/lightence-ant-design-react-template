import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

interface RatingProps {
  value: number;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({ className, value }) => {
  const getRating = useMemo(() => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(<StarOutlined />);
    }

    for (let i = 0; i < value; i++) {
      stars[i] = <StarFilled />;
    }

    return stars;
  }, [value]);

  return (
    <Wrapper className={className}>
      <RatingWrapper>{getRating}</RatingWrapper>
      <Text>{value}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5rem;
  color: ${(props) => props.theme.colors.star};
  margin-right: 0.4rem;
`;

const Text = styled(Typography.Text)`
  font-size: 0.75rem;
`;
