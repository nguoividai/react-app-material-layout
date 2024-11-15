import { FormControlLabel, FormHelperText, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import PlatformSelect from 'src/components/App/PlatformSelect';

const ConfigurationForm = () => {
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
          <Typography variant="h4"> Configuration </Typography>
          <FormHelperText>
            These configurations can vary widely depending on the type of app but commonly include
            settings for user preferences, permissions, display options, and other customization
            features.
          </FormHelperText>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Grid container mt={1} spacing={2}>
                <Grid item xs={12}>
                  <Box component="p">Platform </Box>
                  <PlatformSelect />
                </Grid>
                <Grid item xs={12}>
                  <Box component="p">App Url </Box>
                  <TextField fullWidth variant="outlined" placeholder="E.g. https://my-app.com" />
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
          <Typography variant="h4"> Public </Typography>
          <FormHelperText>
            A public app generally refers to a software application that is made available to the
            public for use, typically without restrictions on who can access it.
          </FormHelperText>

          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Enabled"
            sx={{ mt: 2, mb: 2 }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default React.memo(ConfigurationForm);
