import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DyanamicTable from '../Table/DyanamicTable';
// const DyanamicTable = React.lazy(() => import('../Table/DyanamicTable'));

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open?: boolean;
  selectedValue?: string;
  openSettingPopup: boolean, 
  setOpenSettingPopup: (value: boolean) => void;
  onClose?: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, setOpenSettingPopup, openSettingPopup } = props;

  const handleClose = () => {
    // onClose(selectedValue);
    setOpenSettingPopup(false)
  };

  const handleListItemClick = (value: string) => {
    // onClose(value);
    setOpenSettingPopup(false)
  };

  return (
    <Dialog 
      onClose={handleClose} 
      open={openSettingPopup}
      sx={{width: '100%'}}
      fullWidth={true}
      maxWidth="md"
      className='custom-modal'
    >
      <DialogTitle className='modal-title'>Settings</DialogTitle>
      <DyanamicTable/>
    </Dialog>
  );
}