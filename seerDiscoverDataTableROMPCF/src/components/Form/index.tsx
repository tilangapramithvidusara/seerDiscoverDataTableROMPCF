import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({handleClickOpen, handleClose, handleSubmit, setSubmitFormData} : any) {

  return (
    <React.Fragment>
      <Dialog 
      className='alert-modal'
      open={handleClickOpen} 
      onClose={handleClose}
      PaperProps={{
        style: {
          borderRadius: 0,
        },
      }}>
        <DialogTitle className='heading custom-heading'>Create New</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setSubmitFormData((prev: any) => ({...prev, name: e?.target?.value}))}
          />
          <TextareaAutosize
            aria-label="Description"
            minRows={3}
            placeholder="Description"
            id="description"
            style={{ 
              resize: 'none',
              marginTop: '10px',
              width: '96%'
           }}
            onChange={(e) => setSubmitFormData((prev: any) => ({ ...prev, description: e?.target?.value }))}
          />
        </DialogContent>
        <DialogActions className='btn-wrap'>
          <Button onClick={handleClose} className='btn-primary'>Cancel</Button>
          <Button onClick={handleSubmit} className='btn-blue-outline'>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
