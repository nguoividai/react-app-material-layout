import faker from 'faker';

import React, { useMemo, useState } from 'react';

import { GridColDef } from '@mui/x-data-grid';

import ListView from 'src/components/list-view';

import useTable from 'src/hooks/use-table';

const generateData = () => {
  const data = [];

  for (let i = 1; i <= 100; i += 1) {
    data.push({
      id: i,
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      age: faker.datatype.number({ min: 18, max: 80 }),
    });
  }

  return data;
};

const mockData = generateData();

function TestView() {
  const [searchValue, setSearchValue] = useState<string | undefined>('');
  const table = useTable();

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
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
      flex: 1,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];

  const [rows, setRows] = useState([...mockData]);

  const data = useMemo(() => {
    let results = rows.slice(table.page * table.rowsPerPage, (table.page + 1) * table.rowsPerPage);
    results = searchValue
      ? results.filter(
          (e) => e.lastName.indexOf(searchValue) >= 0 || e.firstName.indexOf(searchValue) >= 0
        )
      : results;
    return results;
  }, [rows, table.page, table.rowsPerPage, searchValue]);

  const onDeleteMultiple = () => {
    if (table.selected) {
      setRows((s) => s.filter((row) => !table.selected.includes(row.id as never)));
    }
  };

  return (
    <ListView
      title="Test"
      searchValue={searchValue}
      data={data}
      columns={columns}
      count={rows.length}
      pageSize={table.rowsPerPage}
      page={table.page}
      selected={table.selected}
      onChangeSearch={(value) => setSearchValue(value)}
      onDeleteMultiple={onDeleteMultiple}
      onChangePage={table.onChangePage}
      onSelectAllRows={table.onSelectAllRows}
      onResetPage={table.onResetPage}
    />
  );
}

export default React.memo(TestView);
