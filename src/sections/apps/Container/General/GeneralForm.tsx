import React from 'react';
import { FormHelperText, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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

        '& .MuiListItemText-secondary': {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h4"> General</Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Grid container mt={1} spacing={2}>
                    <Grid item xs={6}>
                      <ListItemText primary="Name" secondary="Container name" />
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText
                        primary="Container ID"
                        secondary="b5c54caaf09c7d067c98688828970402451adb1ac0424e1bcfab4a67bd08ff03"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText primary="Tag" secondary="react-copilotkit:latest" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
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
