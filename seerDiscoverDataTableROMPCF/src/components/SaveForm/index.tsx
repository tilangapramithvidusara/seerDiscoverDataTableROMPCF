import * as React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function index() {
  return (
    <form>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        id='seerName'
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        id='seerDescription'
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  )
}
