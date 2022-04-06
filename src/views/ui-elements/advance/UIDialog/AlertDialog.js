import React from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';

// ===============================|| UI DIALOG - SWEET ALERT ||=============================== //

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ p: 3 }}
            >
                <DialogTitle id="alert-dialog-title">Use Google&apos;s location service?</DialogTitle>
                <DialogContent>
                    <Typography variant="body2">
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are
                        running.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button onClick={handleClose} color="error">
                        Disagree
                    </Button>
                    <Button variant="contained" size="small" onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
