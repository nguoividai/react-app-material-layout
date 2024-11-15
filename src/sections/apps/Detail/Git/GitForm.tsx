import { Editor } from '@monaco-editor/react';
import { FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import React from 'react';

const GitForm = () => {
  const rows = [{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 }];
  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
      flex: 1,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
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
          <Typography variant="h4"> Git Repository</Typography>
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
        <CardActions className="actions">
          <Button variant="contained"> Save </Button>
        </CardActions>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h4"> Tags </Typography>
          <Box sx={{ height: 400, width: '100%', mt: 2 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSizeOptions={[10]}
              checkboxSelection
              disableRowSelectionOnClick
              disableColumnFilter
              disableDensitySelector
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default React.memo(GitForm);
