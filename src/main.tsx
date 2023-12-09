import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import Error from './pages/Error.tsx';
import Info from './pages/Info.tsx';
import Products from './pages/Products.tsx';
import Home from './pages/Home.tsx';
import MobileNav from './components/MobileNav.tsx';
import Summary from './pages/Summary.tsx';
import Cart from './pages/Cart.tsx';
import FinishOrder from './pages/FinishOrder.tsx';
import Contact from './pages/Contact.tsx';
import Faq from './pages/Faq.tsx';

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
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/cart/summary',
        element: <Summary />,
      },
      {
        path: '/cart/finish-order',
        element: <FinishOrder />,
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
