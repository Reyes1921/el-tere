import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, useMediaQuery } from '@material-ui/core';

// ===============================|| UI DIALOG - RESPONSIVE ||=============================== //

export default function ResponsiveDialog() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
                Open responsive dialog
            </Button>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">Use Google&apos;s location service?</DialogTitle>
                <DialogContent>
                    <Typography variant="body2">
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are
                        running.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button autoFocus onClick={handleClose} color="error">
                        Disagree
                    </Button>
                    <Button variant="contained" size="small" onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
