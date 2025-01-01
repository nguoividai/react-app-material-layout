import { useCallback, useState } from 'react';

function useModal() {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>();

  const handleShow = useCallback((value?: any) => {
    setOpen(true);
    setSelected(value);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSelected(undefined);
  }, []);

  return { open, selected, handleShow, handleClose };
}

export default useModal;
