import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { DashboardContent } from 'src/layouts/dashboard';

function FormSectionView({ title, headActions, children }: any) {
  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          {title}
        </Typography>
        {headActions}
      </Box>

      {children}
    </DashboardContent>
  );
}

export default memo(FormSectionView);
