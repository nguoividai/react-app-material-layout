import React, { useEffect } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {
  Box,
  Grid,
  List,
  Button,
  Typography,
  ListItemText,
  ListSubheader,
  ListItemButton,
} from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

const AppContainerLayout = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const { id } = useParams();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string
  ) => {
    navigate(`/apps/container/${id}/${value}`);
  };
  const checkActiveMenu = (menu: string) => location.pathname.split('/').at(-1) === menu;

  useEffect(() => {
    if (location.pathname.split(`/apps/container/${id}/`).length === 1) {
      navigate(`/apps/container/${id}/general`);
    }
  }, [id, location.pathname, navigate]);

  return (
    <DashboardContent>
      <Box mb={2} mt={2}>
        <Button startIcon={<KeyboardBackspaceIcon />} onClick={() => navigate(`/apps/${id}`)}>
          Go back to apps
        </Button>
      </Box>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Name of Container
        </Typography>
      </Box>
      <Grid
        container
        spacing={5}
        sx={{ '& .MuiListSubheader-root': { backgroundColor: 'transparent' } }}
      >
        <Grid item xs={6} sm={4} md={3}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={checkActiveMenu('general')}
              onClick={(event) => handleListItemClick(event, 'general')}
            >
              <ListItemText primary="General" />
            </ListItemButton>
            <ListItemButton
              selected={checkActiveMenu('environment-variables')}
              onClick={(event) => handleListItemClick(event, 'environment-variables')}
            >
              <ListItemText primary="Environment Variables" />
            </ListItemButton>
            <ListItemButton
              selected={checkActiveMenu('logs')}
              onClick={(event) => handleListItemClick(event, 'logs')}
            >
              <ListItemText primary="Logs" />
            </ListItemButton>
          </List>
        </Grid>
        <Grid item xs={6} sm={8} md={9}>
          <Outlet />
        </Grid>
      </Grid>
    </DashboardContent>
  );
};

export default React.memo(AppContainerLayout);
