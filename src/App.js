import React from 'react';
import routes, { renderRoutes } from './routes';

const App = () => {
  return <React.Fragment>{renderRoutes(routes)}</React.Fragment>;
};

export default App;
