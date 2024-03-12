import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import { cancel } from '../../Constants/messages';

interface AlertButtonProps {
  text: string;
  action: (value: any) => void;
}

interface CustomDialogProps {
  title: string;
  description?: string;
  setOpen?: (value: boolean) => void;
  open: boolean;
  buttons: AlertButtonProps[];
  handleClose: () => void;
}

function CustomDialog(props: CustomDialogProps) {
  const {title, setOpen, open, buttons, description, handleClose} = props

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} className='alert-modal confirm-modal'>
        <DialogTitle className='heading'>{title}</DialogTitle>
        {description && (
          <DialogContent>
            <DialogContentText className='content'>
              {description}
            </DialogContentText>
          </DialogContent>
        )}
        <div className='flex pt-15 footer'>
        {buttons?.length && buttons.map((item: AlertButtonProps, index: number) => {
          const {text, action} = item;
          return (
            <DialogActions className='actions'>
              <Button onClick={(e) => action(e)} color="primary" className={text == cancel ? 'btn-primary ml-10' : 'btn-blue-outline ml-10'}>
                {text}
              </Button>
            </DialogActions>
          )
        })}
        </div>
      </Dialog>
    </div>
  );
}

export default CustomDialog;
