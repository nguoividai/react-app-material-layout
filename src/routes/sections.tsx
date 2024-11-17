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
export const General = lazy(() => import('src/pages/app/detail/general'));
export const SEO = lazy(() => import('src/pages/app/detail/seo'));
export const Configuration = lazy(() => import('src/pages/app/detail/configuration'));
export const Git = lazy(() => import('src/pages/app/detail/git'));
export const Deployment = lazy(() => import('src/pages/app/detail/deployment'));

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
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'apps', element: <AppPage /> },
        { path: 'apps/create', element: <AppCreatePage /> },
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
