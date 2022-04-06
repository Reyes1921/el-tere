import React from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Typography } from '@material-ui/core';

// third party
import Draggable from 'react-draggable';

// draggable
function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

// ===============================|| UI DIALOG - DRAGGABLE ||=============================== //

export default function DraggableDialog() {
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
                Open Draggable Dialog
            </Button>
            <Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent} aria-labelledby="draggable-dialog-title">
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Subscribe
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2">
                        To subscribe to this website, please enter your email address here. We will send updates occasionally.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="error">
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
