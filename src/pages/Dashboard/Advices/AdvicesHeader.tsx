import React, { useState } from 'react';
import styled from 'styled-components';
import { AdviceListBtn } from './AdviceListBtn';
import { AdviceTileBtn } from './AdviceTileBtn';

export const AdvicesHeader: React.FC = () => {
  const [isActive, setActive] = useState('tile');

  const handleClick = (mode: string) => () => {
    setActive(mode);
  };

  return (
    <Wrapper>
      Pieces of advice
      <Buttons>
        <AdviceTileBtn isActive={isActive === 'tile'} onClick={handleClick('tile')} />
        <AdviceListBtn isActive={isActive === 'list'} onClick={handleClick('list')} />
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
`;
