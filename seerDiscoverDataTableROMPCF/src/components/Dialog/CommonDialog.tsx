import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
  // const [open, setOpen] = useState(false);

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        {description && (
          <DialogContent>
            <DialogContentText>
              {description}
            </DialogContentText>
          </DialogContent>
        )}
        {buttons?.length && buttons.map((item: AlertButtonProps, index: number) => {
          const {text, action} = item;
          return (
            <DialogActions>
              <Button onClick={(e) => action(e)} color="primary">
                {text}
              </Button>
            </DialogActions>
          )
        })}
        
      </Dialog>
    </div>
  );
}

export default CustomDialog;