import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './components/router/Router';

const App = () => {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
