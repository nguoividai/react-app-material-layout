import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from 'src/theme/styles';
import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';
import { AppLayout } from 'src/layouts/app';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const AppPage = lazy(() => import('src/pages/app'));
export const AppDetailPage = lazy(() => import('src/pages/app/detail'));
export const AppCreatePage = lazy(() => import('src/pages/app/create'));
export const AppContainerPage = lazy(() => import('src/pages/app/container'));
export const Pos = lazy(() => import('src/pages/pos'));
export const Dishes = lazy(() => import('src/pages/dishes'));
export const ManageTable = lazy(() => import('src/pages/manage-table'));
export const TestPage = lazy(() => import('src/pages/test'));
export const TestCreatePage = lazy(() => import('src/pages/test-create'));

export const General = lazy(() => import('src/pages/app/detail/general'));
export const SEO = lazy(() => import('src/pages/app/detail/seo'));
export const Configuration = lazy(() => import('src/pages/app/detail/configuration'));
export const Git = lazy(() => import('src/pages/app/detail/git'));
export const Deployment = lazy(() => import('src/pages/app/detail/deployment'));

export const GeneralContainer = lazy(() => import('src/pages/app/container/general'));
export const EnvironmentVariablesContainer = lazy(
  () => import('src/pages/app/container/environmentVariables')
);
export const LogsContainer = lazy(() => import('src/pages/app/container/logs'));

// ----------------------------------------------------------------------

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  return useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'test', element: <TestPage /> },
        { path: 'test/create', element: <TestCreatePage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'apps', element: <AppPage /> },
        { path: 'apps/create', element: <AppCreatePage /> },
        { path: 'pos', element: <Pos /> },
        { path: 'dishes', element: <Dishes /> },
        { path: 'manage-table', element: <ManageTable /> },
      ],
    },
    {
      element: (
        <AppLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </AppLayout>
      ),
      children: [
        {
          path: '/apps/:id/',
          element: <AppDetailPage />,
          children: [
            { path: '/apps/:id/general', element: <General /> },
            { path: '/apps/:id/seo', element: <SEO /> },
            { path: '/apps/:id/configuration', element: <Configuration /> },
            { path: '/apps/:id/git', element: <Git /> },
            { path: '/apps/:id/deployment', element: <Deployment /> },
          ],
        },
        {
          path: '/apps/container/:id/',
          element: <AppContainerPage />,
          children: [
            { path: 'general', element: <GeneralContainer /> },
            { path: 'environment-variables', element: <EnvironmentVariablesContainer /> },
            { path: 'logs', element: <LogsContainer /> },
          ],
        },
      ],
    },
    {
      path: 'sign-in',
      element: (
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      ),
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
