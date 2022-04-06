import React from 'react';

// material-ui
import { withStyles } from '@material-ui/styles';
import { Button, Dialog, IconButton, Stack, Typography } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

// assets
import CloseIcon from '@material-ui/icons/Close';
import Add from '@material-ui/icons/Add';

// form imports
import ClientCreateView from 'views/dashboard/Clients/CreateView';

// style constant
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(3)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(2),
        top: theme.spacing(2),
        color: theme.palette.grey[500]
    }
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(3)
    }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    }
}))(MuiDialogActions);

// =============================|| DIALOG TITLE ||============================= //

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            {children}
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

// ===============================|| UI DIALOG - CUSTOMIZED ||=============================== //

export default function ClientFormDialog() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton color="inherit" size="large" disableRipple onClick={handleClickOpen}>
                <Add />
            </IconButton>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} sx={{ '& .MuiDialog-paper': { pl: 1 } }}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    New Client Form
                </DialogTitle>
                <DialogContent>
                    <ClientCreateView />
                </DialogContent>
            </Dialog>
        </div>
    );
}
