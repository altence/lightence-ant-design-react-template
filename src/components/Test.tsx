import React from 'react';

interface Test {
  testVal: number;
}

const Test: React.FC<Test> = (props: Test) => {
  return <div>TEST DIV {props.testVal}</div>;
};

export default Test;
