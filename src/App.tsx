import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './routes/routes';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
