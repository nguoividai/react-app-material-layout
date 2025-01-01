import * as React from 'react';

import Button, { ButtonPropsColorOverrides } from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { TransitionProps } from '@mui/material/transitions';

import { OverridableStringUnion } from '@mui/types';

const Transition = React.forwardRef<unknown, TransitionProps & { children: React.ReactElement }>(
  (props, ref) => <Slide direction="up" ref={ref} {...props} />
);

type ConfirmDialogProps = {
  readonly open: boolean;
  readonly title?: string;
  readonly content?: string;
  readonly okText?: string;
  readonly okColor?: OverridableStringUnion<
    'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    ButtonPropsColorOverrides
  >;
  readonly handleClose?: () => void;
  readonly handleSubmit?: () => void;
};

export default function ConfirmDialog({
  open,
  title,
  content,
  okText,
  okColor,
  handleClose = () => {},
  handleSubmit = () => {},
}: ConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="confirm-dialog-slide-description"
    >
      <DialogTitle>{title ?? 'Delete Confirm'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="confirm-dialog-slide-description">
          {content ??
            'This will permanently delete your account and all associated data. Do you wish to continue?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          color={okColor ?? 'error'}
          onClick={() => {
            handleSubmit();
            handleClose();
          }}
        >
          {okText ?? 'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
