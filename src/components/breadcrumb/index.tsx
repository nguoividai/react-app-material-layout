import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { To, useNavigate } from 'react-router-dom';
import { BreadcrumbType } from './types';

type BreadcrumbProps = {
  readonly breadcrumbs: BreadcrumbType[];
};

function Breadcrumb({ breadcrumbs }: BreadcrumbProps) {
  const navigate = useNavigate();

  return (
    breadcrumbs?.length > 0 && (
      <Breadcrumbs
        separator={
          <Box
            component="span"
            sx={{ height: 5, width: 5, borderRadius: '50%', backgroundColor: '#919EAB' }}
          />
        }
        aria-label="breadcrumb"
        sx={{ mt: 2, mb: 5 }}
      >
        {breadcrumbs.map((breadcrumb: BreadcrumbType) =>
          breadcrumb.route ? (
            <Link
              underline="hover"
              key="1"
              color="inherit"
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate(breadcrumb.route as To)}
            >
              {breadcrumb.title}
            </Link>
          ) : (
            <Typography key="3" sx={{ color: 'text.primary' }}>
              {breadcrumb.title}
            </Typography>
          )
        )}
      </Breadcrumbs>
    )
  );
}

export default React.memo(Breadcrumb);
