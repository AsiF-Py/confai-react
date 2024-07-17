import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/all-calls',
        element: lazy(() => import('./views/dashboard'))
      },
      {
        exact: 'true',
        path: '/prior-ticker-list',
        element: lazy(() => import('./views/PriorTickerList/PriorTickerList'))
      },
      {
        exact: 'true',
        path: '/symbol-detail/:ticker_symbol',
        element: lazy(() => import('./views/PriorTickerList/Symbol'))
      },
      {
        exact: 'true',
        path: '/ticker-list',
        element: lazy(() => import('./views/TickerList/TickerList'))
      },
      {
        exact: 'true',
        path: '/call-detail/:ticker_symbol/:year/:quarter/',
        element: lazy(() => import('./views/dashboard/CallDetail'))
      },
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  }
];

export default routes;
