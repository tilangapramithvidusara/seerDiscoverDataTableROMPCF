import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';


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
        <DialogContentText className='mt-10 d-inline'>
          <label>
            <span>
                Name
              <span style={{ color: 'red', alignSelf: 'flex-start' }}>*</span>
            </span>
          </label></DialogContentText>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            placeholder='Name'
            InputLabelProps={{shrink: true}}
            fullWidth
            variant="standard"
            // required={true}
            onChange={(e) => setSubmitFormData((prev: any) => ({...prev, name: e?.target?.value}))}
            style={{
              marginTop: '0px'
            }}
          />

          <DialogContentText className='mt-10 d-inline'><label>Description</label></DialogContentText>
          <TextareaAutosize
            aria-label="Description"
            minRows={3}
            placeholder="Description"
            id="description"
            style={{ 
              resize: 'none',
              width: '96.6%',
           }}
            onChange={(e) => setSubmitFormData((prev: any) => ({ ...prev, description: e?.target?.value }))}
          />
        </DialogContent>
        <DialogActions className='btn-wrap'>
          <Button onClick={handleClose} className='btn-blue-outline'>Cancel</Button>
          <Button onClick={handleSubmit} className='btn-primary'>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
