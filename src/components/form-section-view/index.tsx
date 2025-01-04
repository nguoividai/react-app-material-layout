import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { DashboardContent } from 'src/layouts/dashboard';
import Breadcrumb from '../breadcrumb';

function FormSectionView({ title, headActions, children, breadcrumbs }: any) {
  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={!breadcrumbs?.length ? 5 : 0}>
        <Typography variant="h4" flexGrow={1}>
          {title}
        </Typography>
        {headActions}
      </Box>

      <Breadcrumb breadcrumbs={breadcrumbs} />

      {children}
    </DashboardContent>
  );
}

export default memo(FormSectionView);
