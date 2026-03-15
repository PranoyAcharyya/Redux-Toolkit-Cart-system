import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Cart from './cart';

type DialogCartProps = {
  open: boolean
  handleClose: () => void
}

export default function DialogCart({ open, handleClose }: DialogCartProps) {
 

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={"xl"}
    >
      <DialogTitle id="alert-dialog-title">
        Cart Items
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Your cart items will appear here
        </DialogContentText>
        <Cart/>
        
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>

    </Dialog>
  );
}



