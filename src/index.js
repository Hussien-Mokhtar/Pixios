import React from 'react';
import ReactDOM from 'react-dom/client';

import "./Main.css"
import { RouterProvider } from 'react-router-dom';
import Routers from './Routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={Routers}/>
  </React.StrictMode>
);

