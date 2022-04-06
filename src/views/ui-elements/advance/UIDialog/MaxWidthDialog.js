import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    Typography
} from '@material-ui/core';

// style constant
const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content'
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120
    },
    formControlLabel: {
        marginTop: theme.spacing(1)
    }
}));

// ===============================|| UI DIALOG - SIZE VARIANTS ||=============================== //

export default function MaxWidthDialog() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [maxWidth, setMaxWidth] = React.useState('sm');
    const handleMaxWidthChange = (event) => {
        setMaxWidth(event.target.value);
    };

    const [fullWidth, setFullWidth] = React.useState(true);
    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open max-width dialog
            </Button>
            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose} aria-labelledby="max-width-dialog-title">
                <DialogTitle id="max-width-dialog-title">Optional Sizes</DialogTitle>
                <DialogContent>
                    <Typography variant="body2">You can set my maximum width and whether to adapt or not.</Typography>
                    <form className={classes.form} noValidate>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                            <Select
                                autoFocus
                                value={maxWidth}
                                label="Max Width"
                                onChange={handleMaxWidthChange}
                                inputProps={{
                                    name: 'max-width',
                                    id: 'max-width'
                                }}
                            >
                                <MenuItem value={false}>false</MenuItem>
                                <MenuItem value="xs">xs</MenuItem>
                                <MenuItem value="sm">sm</MenuItem>
                                <MenuItem value="md">md</MenuItem>
                                <MenuItem value="lg">lg</MenuItem>
                                <MenuItem value="xl">xl</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            className={classes.formControlLabel}
                            control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
                            label="Full width"
                        />
                    </form>
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button onClick={handleClose} color="error">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
