import { FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import ImgPlaceholder from 'src/assets/placeholder.png';

const GeneralForm = () => {
  const a = 12;
  return (
    <Box
      sx={{
        '& .MuiCard-root': {
          mt: 3,
          mb: 3,
        },
        '& .actions': {
          borderTop: '1px solid #ddd',
          display: 'flex',
          justifyContent: 'end',
          backgroundColor: '#fafafa',

          '&.error': {
            backgroundColor: '#fff0f0',
          },
        },
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h4"> Project Name</Typography>
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& img': {
                  width: 175,
                  mb: 4,
                },
                '& .MuiBox-root': {
                  textAlign: 'center',
                },
              }}
            >
              <Box>
                <img src={ImgPlaceholder} alt="icon" loading="lazy" />
                <Button variant="outlined">Upload Image</Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Grid container mt={1} spacing={2}>
                    <Grid item xs={12}>
                      <Box component="p"> App Name </Box>
                      <TextField fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <Box component="p"> Short Description </Box>
                      <TextField fullWidth multiline rows={4} variant="outlined" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className="actions">
          <Button variant="contained"> Save </Button>
        </CardActions>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h4"> Description</Typography>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Grid container mt={1} spacing={2}>
                <Grid item xs={12}>
                  <Box component="p"> Description </Box>
                  <TextField fullWidth multiline rows={4} variant="outlined" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className="actions">
          <Button variant="contained"> Save </Button>
        </CardActions>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h4"> Delete Project</Typography>
          <FormHelperText>
            The project will be permanently deleted, including its deployments and domains. This
            action is irreversible and can not be undone.
          </FormHelperText>
        </CardContent>
        <CardActions className="actions error">
          <Button variant="contained" color="error">
            Delete{' '}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default React.memo(GeneralForm);
