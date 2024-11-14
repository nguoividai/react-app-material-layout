import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { DashboardContent } from 'src/layouts/dashboard';

const seeders = [
  {
    name: 'TaskMaster',
    short_description: 'A task management app to help you stay organized.',
    repository_url: 'https://github.com/user/taskmaster',
    created_on: '2023-03-15',
  },
  {
    name: 'Weatherly',
    short_description: 'A weather forecasting app with real-time updates.',
    repository_url: 'https://github.com/user/weatherly',
    created_on: '2022-11-08',
  },
  {
    name: 'FitTracker',
    short_description: 'Track your workouts and fitness progress over time.',
    repository_url: 'https://github.com/user/fittracker',
    created_on: '2024-01-22',
  },
  {
    name: 'ExpenseTracker',
    short_description: 'Keep track of your expenses and manage your budget.',
    repository_url: 'https://github.com/user/expensetracker',
    created_on: '2021-07-05',
  },
  {
    name: 'NoteFlow',
    short_description: 'A simple note-taking app with cloud sync.',
    repository_url: 'https://github.com/user/noteflow',
    created_on: '2023-02-12',
  },
  {
    name: 'JobBoard',
    short_description: 'A platform for posting and finding job opportunities.',
    repository_url: 'https://github.com/user/jobboard',
    created_on: '2022-09-30',
  },
  {
    name: 'MusicStream',
    short_description: 'Listen to your favorite music and discover new tracks.',
    repository_url: 'https://github.com/user/musicstream',
    created_on: '2024-05-16',
  },
  {
    name: 'RecipeBox',
    short_description: 'Store and share your favorite recipes with friends.',
    repository_url: 'https://github.com/user/recipebox',
    created_on: '2023-11-10',
  },
  {
    name: 'ChatApp',
    short_description: 'A real-time messaging app for teams and friends.',
    repository_url: 'https://github.com/user/chatapp',
    created_on: '2021-06-17',
  },
  {
    name: 'MovieDB',
    short_description: 'Browse and find details about your favorite movies.',
    repository_url: 'https://github.com/user/moviedb',
    created_on: '2022-04-25',
  },
];

const Apps: React.FC = () => {
  const [filterName, setFilterName] = useState('');

  const navigate = useNavigate();

  const goToCreate = () => {
    navigate('/apps/create');
  };

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Apps
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={goToCreate}
        >
          New app
        </Button>
      </Box>
      <Grid container spacing={5}>
        {seeders.map((e) => (
          <Grid key={e.name} item xs={4} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {e.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 12 }}>
                  {e.created_on}
                </Typography>
                <Typography variant="body2">{e.short_description}</Typography>
                <Box
                  component="a"
                  target="_blank"
                  href={e.repository_url}
                  sx={{ color: '#1877F2', textDecoration: 'none', mt: 1, fontSize: 12 }}
                >
                  {e.repository_url}
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small">View more</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DashboardContent>
  );
};

export default React.memo(Apps);
