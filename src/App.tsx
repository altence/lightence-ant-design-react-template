import React from 'react';
import { Button } from 'antd';
import Test from './components/Test';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <Button type="primary">TEST</Button>
      </header>
      <Test testVal={4} />
    </div>
  );
};

export default App;
