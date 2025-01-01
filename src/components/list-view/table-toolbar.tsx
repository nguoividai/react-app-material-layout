import { memo, useRef } from 'react';

import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import useModal from 'src/hooks/use-modal';

import { Iconify } from 'src/components/iconify';

import ConfirmDialog from '../dialog/confirm-dialog';

// ----------------------------------------------------------------------

type TableToolbarProps = {
  readonly numSelected: number;
  readonly filterName: string;
  readonly onSearch?: (event: any) => void;
  readonly onDeleteMultiple?: () => void;
};

function TableToolbar({
  numSelected,
  filterName,
  onSearch,
  onDeleteMultiple = () => {},
}: TableToolbarProps) {
  const { open, handleShow, handleClose } = useModal();
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
          <Tooltip title="Filter list">
            <IconButton>
              <Iconify icon="ic:round-filter-list" />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>

      <ConfirmDialog open={open} handleClose={handleClose} handleSubmit={onDeleteMultiple} />
    </>
  );
}

export default memo(TableToolbar);
