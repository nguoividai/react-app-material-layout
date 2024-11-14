import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { DashboardContent } from 'src/layouts/dashboard';
import LanguageIcon from '@mui/icons-material/Language';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import AppsIcon from '@mui/icons-material/Apps';
import DateRangeIcon from '@mui/icons-material/DateRange';

const platforms = [
  {
    value: 'Web',
    icon: <LanguageIcon />,
  },
  {
    value: 'Mobile',
    icon: <InstallMobileIcon />,
  },
  {
    value: 'Hybrid',
    icon: <AppsIcon />,
    active: true,
  },
  {
    value: 'Console',
    icon: <DateRangeIcon />,
  },
];

const AppCreateLayout = () => {
  const navigate = useNavigate();

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Create App
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5">Information</Typography>
              <Grid container mt={1} spacing={2}>
                <Grid item xs={12}>
                  <Box component="p"> Platform </Box>

                  <Grid
                    container
                    mt={1}
                    spacing={2}
                    sx={{
                      '& .MuiCard-root': {
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        boxShadow: 'none',
                        border: '1px solid #ededed',
                        cursor: 'pointer',

                        '&.active': {
                          backgroundColor: '#333',
                          color: '#fff',
                          '& .MuiTypography-body1': {
                            color: '#fff',
                          },
                        },
                      },
                      '& .MuiCardContent-root': {
                        textAlign: 'center  ',
                      },
                      '& .MuiTypography-body1': {
                        mt: 1,
                        textTransform: 'uppercase',
                        color: '#333',
                      },
                    }}
                  >
                    {platforms.map((e) => (
                      <Grid key={e.value} item xs={3}>
                        <Card className={e.active ? 'active' : ''}>
                          <CardContent>
                            {e.icon}
                            <Typography variant="body1">{e.value}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Box component="p"> App Name </Box>
                  <TextField fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Box component="p"> Short Description </Box>
                  <TextField fullWidth multiline rows={4} variant="outlined" />
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Typography variant="h5">Git Repository</Typography>
              <Grid container mt={1} spacing={2}>
                <Grid item xs={6}>
                  <Box component="p"> Repository Url </Box>
                  <TextField fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <Box component="p"> Branch Name </Box>
                  <TextField fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <Box component="p"> Dockerfile Path </Box>
                  <TextField fullWidth placeholder="E.g. path/to/Dockerfile" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <Box component="p"> Access Token </Box>
                  <TextField fullWidth placeholder="************" variant="outlined" />
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Typography variant="h5">Docker Image </Typography>
              <Grid container mt={1} spacing={2}>
                <Grid item xs={6}>
                  <Box component="p"> Image Name </Box>
                  <TextField fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <Box component="p"> Target Port </Box>
                  <TextField fullWidth variant="outlined" placeholder="E.g. 80" />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'end', pt: 3, pb: 2 }}>
              <Button variant="contained">Create a new app</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </DashboardContent>
  );
};

export default React.memo(AppCreateLayout);
