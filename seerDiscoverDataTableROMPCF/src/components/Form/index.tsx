import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function FormDialog({handleClickOpen, handleClose, handleSubmit, setSubmitFormData} : any) {

  return (
    <React.Fragment>
      <Dialog 
      open={handleClickOpen} 
      onClose={handleClose}
      PaperProps={{
        style: {
          borderRadius: 0,
        },
      }}>
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
              width: '94%',
              marginTop: '20px',
              resize: 'none',
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontSize: '16px',
              padding: '10px', 
              borderColor: '#c4c4c4', 
              borderRadius: '4px',
           }}
            onChange={(e) => setSubmitFormData((prev: any) => ({ ...prev, description: e?.target?.value }))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
