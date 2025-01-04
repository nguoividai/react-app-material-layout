import React, { memo, useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';

import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { useMediaQuery, useTheme } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import TableToolbar from './table-toolbar';
import Breadcrumb from '../breadcrumb';
import { BreadcrumbType } from '../breadcrumb/types';

// ----------------------------------------------------------------------

type ListViewProps = {
  readonly data?: any;
  readonly columns?: readonly GridColDef[];
  readonly title?: string;
  readonly headActions?: React.ReactNode;
  readonly searchValue?: string;
  readonly count?: number;
  readonly pageSize?: number;
  readonly page?: number;
  readonly selected?: string[] | number[];
  readonly filterElement?: React.ReactNode;
  readonly breadcrumbs?: BreadcrumbType[];
  readonly onChangeSearch?: (value?: string) => void;
  readonly onChangePage?: (event: unknown, newPage: number) => void;
  readonly onDeleteMultiple?: () => void;
  readonly onSelectAllRows?: (checked: boolean, newSelectedList: string[]) => void;
  readonly onChangeRowsPerPage?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onResetPage?: () => void;
  readonly onFilter?: () => void;
};

function ListView({
  data = [],
  columns = [],
  title,
  headActions,
  searchValue = '',
  count = 0,
  pageSize = 0,
  page = 1,
  selected = [],
  filterElement,
  breadcrumbs = [],
  onChangeSearch = () => {},
  onChangePage = () => {},
  onDeleteMultiple = () => {},
  onSelectAllRows = () => {},
  onChangeRowsPerPage = () => {},
  onResetPage = () => {},
  onFilter = () => {},
}: ListViewProps) {
  const theme = useTheme();

  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const isXlUp = useMediaQuery(theme.breakpoints.up('xl'));
  const heightTable = useMemo(() => (isXlUp ? 550 : isLgDown ? 500 : 400), [isXlUp, isLgDown]);

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={!breadcrumbs.length ? 5 : 0}>
        <Typography variant="h4" flexGrow={1}>
          {title}
        </Typography>
        {headActions}
      </Box>

      <Breadcrumb breadcrumbs={breadcrumbs} />

      <Card>
        <TableToolbar
          numSelected={selected.length}
          filterName={searchValue}
          filterElement={filterElement}
          onSearch={(event: any) => {
            onChangeSearch?.(event.target.value);
            onResetPage();
          }}
          onDeleteMultiple={onDeleteMultiple}
          onFilter={onFilter}
        />

        <Box
          sx={{
            height: heightTable,
            width: '100%',
            '& .MuiDataGrid-root': {
              border: 0,
              borderRadius: 0,
              '& .MuiDataGrid-columnHeader': { backgroundColor: '#ededed' },
            },
          }}
        >
          <DataGrid
            key={pageSize}
            hideFooter
            disableColumnSelector
            disableColumnMenu
            rows={data}
            columns={columns}
            rowSelectionModel={selected}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: pageSize ?? 10,
                },
              },
            }}
            checkboxSelection
            disableRowSelectionOnClick
            onRowSelectionModelChange={(newSelection: GridRowSelectionModel) => {
              onSelectAllRows(true, newSelection as string[]);
            }}
          />
        </Box>

        <TablePagination
          sx={{ borderTop: '1px solid #ededed' }}
          component="div"
          page={page ?? 1}
          count={count}
          rowsPerPage={pageSize}
          onPageChange={onChangePage}
          rowsPerPageOptions={[10, 25, 50, 100]}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
      </Card>
    </DashboardContent>
  );
}

export default memo(ListView);

// ----------------------------------------------------------------------
