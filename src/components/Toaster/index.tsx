import { useState, SyntheticEvent } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export function Toaster() {
  const [open, setOpen] = useState(true);

  function handleClose(event?: SyntheticEvent | Event, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          severity="success"
          sx={{ width: '100%' }}
          variant="filled"
          onClose={handleClose}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
