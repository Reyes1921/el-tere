import React from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Typography } from '@material-ui/core';

// animation
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// ===============================|| UI DIALOG - SLIDE ANIMATION ||=============================== //

export default function AlertDialogSlide() {
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
                Slide in alert dialog
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title1"
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle id="alert-dialog-slide-title1">Use Google&apos;s location service?</DialogTitle>
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
                    <Button variant="contained" size="small" onClick={handleClose}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
