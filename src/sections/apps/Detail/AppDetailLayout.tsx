import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { DashboardContent } from 'src/layouts/dashboard';
import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

const AppDetailLayout = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const { id } = useParams();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string
  ) => {
    navigate(`/apps/${id}/${value}`);
  };
  const checkActiveMenu = (menu: string) => location.pathname.split('/').at(-1) === menu;

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Name of App
        </Typography>
      </Box>
      <Grid
        container
        spacing={5}
        sx={{ '& .MuiListSubheader-root': { backgroundColor: 'transparent' } }}
      >
        <Grid item xs={6} sm={4} md={3}>
          <List
            component="nav"
            aria-label="main mailbox folders"
            subheader={<ListSubheader>Information</ListSubheader>}
          >
            <ListItemButton
              selected={checkActiveMenu('general')}
              onClick={(event) => handleListItemClick(event, 'general')}
            >
              <ListItemText primary="General" />
            </ListItemButton>
            <ListItemButton
              selected={checkActiveMenu('seo')}
              onClick={(event) => handleListItemClick(event, 'seo')}
            >
              <ListItemText primary="SEO" />
            </ListItemButton>
            <ListItemButton
              selected={checkActiveMenu('configuration')}
              onClick={(event) => handleListItemClick(event, 'configuration')}
            >
              <ListItemText primary="Configuration" />
            </ListItemButton>
          </List>
          <List
            component="nav"
            aria-label="main mailbox folders"
            subheader={<ListSubheader>Integration & Deployment</ListSubheader>}
          >
            <ListItemButton
              selected={checkActiveMenu('git')}
              onClick={(event) => handleListItemClick(event, 'git')}
            >
              <ListItemText primary="Git" />
            </ListItemButton>
            <ListItemButton
              selected={checkActiveMenu('deployemnt')}
              onClick={(event) => handleListItemClick(event, 'deployment')}
            >
              <ListItemText primary="Deployment" />
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

export default React.memo(AppDetailLayout);
