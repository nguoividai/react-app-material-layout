import { Editor } from '@monaco-editor/react';
import { FormHelperText, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import React from 'react';

const DeploymentForm = () => {
  const idpRows = [
    {
      id: 'sha256:128c0c93ff871d08b1e2dc736e7fdcaaab86c6b40dc1e2fd53fe235ee68d8ea3',
      name: 'OAuth',
      created: '15/11/2024',
    },
  ];
  const idpColumns: GridColDef<(typeof idpRows)[number]>[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 100,
      flex: 1,
    },
    {
      field: 'created',
      headerName: 'Created',
      width: 150,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      width: 50,
      getActions: (params) => [
        <GridActionsCellItem label="Edit" showInMenu />,
        <GridActionsCellItem label="Delete" showInMenu />,
      ],
    },
  ];
  const containerRows = [
    {
      id: 'sha256:128c0c93ff871d08b1e2dc736e7fdcaaab86c6b40dc1e2fd53fe235ee68d8ea3',
      name: 'Frontend Container',
      created: '15/11/2024',
    },
    {
      id: 'sha256:128c0c93ff871d08b1e2dc736e7fdcaaab86c6b40dc1e2fd53fe235ee68d8ea1',
      name: 'API Container',
      created: '15/11/2024',
    },
  ];
  const containerColumns: GridColDef<(typeof idpRows)[number]>[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 100,
      flex: 1,
    },
    {
      field: 'created',
      headerName: 'Created',
      width: 150,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      width: 50,
      getActions: (params) => [
        <GridActionsCellItem label="View" showInMenu />,
        <GridActionsCellItem label="Delete" showInMenu />,
      ],
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
          <Typography variant="h4"> Deployment General</Typography>
          <Grid container mt={1} spacing={2}>
            <Grid item xs={6}>
              <ListItemText primary="Name" secondary="Deployment Name" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary="Status" secondary="Running" />
            </Grid>
            <Grid item xs={6}>
              <ListItemText primary="Last Deployment" secondary="15/11/2024 15:30" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h4"> IDP Clients </Typography>
          <FormHelperText>
            is an authentication protocol built on top of OAuth 2.0. It allows applications to
            authenticate users, get basic profile information, and securely access user data from
            identity providers,
          </FormHelperText>
          <Box sx={{ height: 400, width: '100%', mt: 2 }}>
            <DataGrid
              rows={idpRows}
              columns={idpColumns}
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
      <Card>
        <CardContent>
          <Typography variant="h4"> Containers </Typography>
          <FormHelperText>
            A container packages an application and its dependencies into a single unit that can be
            run consistently across different computing environments.
          </FormHelperText>
          <Box sx={{ height: 400, width: '100%', mt: 2 }}>
            <DataGrid
              rows={containerRows}
              columns={containerColumns}
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

export default React.memo(DeploymentForm);
