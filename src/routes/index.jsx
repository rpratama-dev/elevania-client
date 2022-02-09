import { Navigate, Outlet } from 'react-router-dom';
// import AuthStore from './store/auth.store';
import { AdmDashboard, AdmManageProduct, AdmSyncProduct, Login } from '../pages';
import { ProductDashboard } from '../pages';

function NoMatch() {
  return <h1>NoMatch</h1>;
}
const routes = (isLoggedIn, store) => [
  {
    path: '/admin',
    element: isLoggedIn ? (
      <AdmDashboard {...store} />
    ) : (
      <Navigate to="/login" state={{ from: location }} />
    ),
    children: [
      {
        path: '/admin',
        element: <AdmManageProduct {...store} />,
        children: [],
      },
      {
        path: '/admin/product',
        element: <Outlet {...store} />,
        children: [
          { path: '/admin/product', element: <AdmManageProduct {...store} /> },
          { path: '/admin/product/sync', element: <AdmSyncProduct {...store} /> },
          { path: '*', element: <NoMatch /> },
        ],
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
  { path: 'login', element: <Login {...store} /> },
  {
    path: '/',
    element: <ProductDashboard {...store} />,
    children: [],
  },
  {
    path: '*',
    element: <NoMatch />,
    children: [],
  },
];

export default routes;
