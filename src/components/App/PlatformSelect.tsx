import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const PlatformSelect = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={2}
      sx={{
        '& .MuiCard-root': {
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
  );
};

export default React.memo(PlatformSelect);
