import GlobalStyle from './styles/GlobalStyle.ts';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import Error from './pages/Error.tsx';
import Info from './pages/Info.tsx';
import Products from './pages/Products.tsx';
import Product from './pages/Product.tsx';
import User from './pages/User.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/info',
        element: <Info />,
      },
      {
        path: '/products',
        element: <Products />,
        children: [
          {
            path: '/products/:productId',
            element: <Product />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
