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
  const rows = [
    {
      id: 'sha256:128c0c93ff871d08b1e2dc736e7fdcaaab86c6b40dc1e2fd53fe235ee68d8ea3',
      tag: 'v1',
      created: '15/11/2024',
    },
    {
      id: 'sha256:128c0c93ff871d08b1e2dc736e7fdcaaab86c6b40dc1e2fd53fe235ee68d8ea4',
      tag: 'v2',
      created: '16/11/2024',
    },
    {
      id: 'sha256:128c0c93ff871d08b1e2dc736e7fdcaaab86c6b40dc1e2fd53fe235ee68d8ea5',
      tag: 'v3',
      created: '17/11/2024',
    },
  ];
  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 300 },
    {
      field: 'tag',
      headerName: 'Tag',
      width: 100,
      flex: 1,
    },
    {
      field: 'created',
      headerName: 'Created',
      width: 150,
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
              getRowId={(row) => row.id}
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
