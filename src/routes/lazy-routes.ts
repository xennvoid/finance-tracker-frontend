import { FC, lazy, LazyExoticComponent } from 'react';
import { ROUTES } from './routes';
import { RouteObject } from 'react-router';

type LazyRoute = Omit<RouteObject, 'element'> & {
  element: LazyExoticComponent<FC<any>>;
};

export const lazyRoutes: LazyRoute[] = [
  {
    index: true,
    path: ROUTES.HOME,
    element: lazy(() => import('@pages/Home')),
  },
  {
    path: ROUTES.TRANSACTIONS,
    element: lazy(() => import('@pages/Transactions')),
  },
  {
    path: ROUTES.CARDS,
    element: lazy(() => import('@pages/Cards')),
  },
  {
    path: ROUTES.SETTINGS,
    element: lazy(() => import('@pages/Settings')),
  },
];
