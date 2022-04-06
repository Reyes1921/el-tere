import React from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@material-ui/core';

// ===============================|| UI DIALOG - FORMS ||=============================== //

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <Typography variant="body2" sx={{ pb: 3 }}>
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are
                        running.
                    </Typography>

                    <TextField autoFocus id="name" label="Email Address" type="email" fullWidth />
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    <Button variant="contained" size="small" onClick={handleClose}>
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
