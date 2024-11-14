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

const SEOForm = () => {
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
          <Typography variant="h4"> Meta Tag</Typography>
          <FormHelperText>
            meta tags are elements in the HTML of a webpage that provide metadata (data about data)
            to search engines and other web services. Meta tags are not visible on the page itself,
            but they can be crucial for search engines to understand the content of the page and how
            it should be indexed or displayed in search results.
          </FormHelperText>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Grid container mt={1} spacing={2}>
                <Grid item xs={12}>
                  <Box component="p"> Meta Title </Box>
                  <TextField fullWidth variant="outlined" placeholder="E.g. Your-app | Company©" />
                </Grid>
                <Grid item xs={12}>
                  <Box component="p"> Meta Description </Box>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="E.g. This is a description to describe your app and relevant to SEO"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className="actions">
          <Button variant="contained"> Save </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default React.memo(SEOForm);
