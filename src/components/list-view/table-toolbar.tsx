import React, { memo, useRef } from 'react';

import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import useModal from 'src/hooks/use-modal';

import { Iconify } from 'src/components/iconify';

import { Badge, Box, Button, Divider, Drawer, Stack } from '@mui/material';

import ConfirmDialog from '../dialog/confirm-dialog';
import { Scrollbar } from '../scrollbar';

// ----------------------------------------------------------------------

type TableToolbarProps = {
  readonly numSelected: number;
  readonly filterName: string;
  readonly canReset?: boolean;
  readonly filterElement?: React.ReactNode;
  readonly onSearch?: (event: any) => void;
  readonly onDeleteMultiple?: () => void;
  readonly onResetFilter?: () => void;
  readonly onFilter?: () => void;
};

function TableToolbar({
  numSelected,
  filterName,
  filterElement,
  canReset = false,
  onSearch = () => {},
  onDeleteMultiple = () => {},
  onResetFilter = () => {},
  onFilter = () => {},
}: TableToolbarProps) {
  const { open, handleShow, handleClose } = useModal();
  const {
    open: openFilter,
    handleShow: handleShowFilter,
    handleClose: handleCloseFilter,
  } = useModal();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch?.(event);
    }
  };

  return (
    <>
      <Toolbar
        sx={{
          height: 96,
          display: 'flex',
          justifyContent: 'space-between',
          p: (theme) => theme.spacing(0, 1, 0, 3),
          ...(numSelected > 0 && {
            color: 'primary.main',
            bgcolor: 'primary.lighter',
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography component="div" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <OutlinedInput
            ref={inputRef}
            fullWidth
            defaultValue={filterName}
            placeholder="Search..."
            size="small"
            startAdornment={
              <InputAdornment position="start">
                <Iconify width={20} icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
            sx={{ maxWidth: 320 }}
            onChange={onSearch}
            onKeyDown={handleKeyDown}
          />
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton color="error" onClick={handleShow}>
              <Iconify icon="solar:trash-bin-trash-bold" />
            </IconButton>
          </Tooltip>
        ) : (
          !!filterElement && (
            <Tooltip title="Filter list">
              <IconButton onClick={handleShowFilter}>
                <Iconify icon="ic:round-filter-list" />
              </IconButton>
            </Tooltip>
          )
        )}
      </Toolbar>

      <ConfirmDialog open={open} handleClose={handleClose} handleSubmit={onDeleteMultiple} />

      <Drawer anchor="right" open={openFilter} onClose={handleCloseFilter}>
        <Box sx={{ width: 280 }}>
          <Box display="flex" alignItems="center" sx={{ pl: 2.5, pr: 1.5, py: 2 }}>
            <Typography variant="h6" flexGrow={1}>
              Filters
            </Typography>

            <Tooltip title="Reset">
              <IconButton
                onClick={() => {
                  onResetFilter();
                  handleCloseFilter();
                }}
              >
                <Badge color="error" variant="dot" invisible={!canReset}>
                  <Iconify icon="solar:refresh-linear" />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Close filter">
              <IconButton onClick={handleCloseFilter}>
                <Iconify icon="mingcute:close-line" />
              </IconButton>
            </Tooltip>
          </Box>

          <Divider />

          <Scrollbar>
            <Stack spacing={3} sx={{ p: 3, height: 'calc(100vh - 130px)', overflow: 'auto' }}>
              {filterElement}
            </Stack>
          </Scrollbar>

          <Box
            display="flex"
            justifyContent="end"
            sx={{
              p: 1.5,
              borderTop: '1px solid #ededed',
              height: 'auto',
              backgroundColor: '#fefefe',
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                onFilter();
                handleCloseFilter();
              }}
            >
              Filter
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default memo(TableToolbar);
