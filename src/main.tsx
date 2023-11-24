import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import Error from './pages/Error.tsx';
import Info from './pages/Info.tsx';
import Products from './pages/Products.tsx';
import Home from './pages/Home.tsx';
import Cart from './pages/Cart.tsx';
import MobileNav from './components/MobileNav.tsx';

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
        path: '/info',
        element: <Info />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/nav',
        element: <MobileNav />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
