import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { List, ListItemText, ListItemIcon } from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItemButton';

// assets
import PieChartOutlineOutlinedIcon from '@material-ui/icons/PieChartOutlineOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// style constant
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
}));

// ================================|| UI LIST - DISABLED ||================================ //

export default function DisabledList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton>
                    <ListItemIcon>
                        <PieChartOutlineOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Chart" />
                </ListItemButton>
                <ListItemButton disabled>
                    <ListItemIcon>
                        <MapOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Disabled Menu" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <LockOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Page LayoutsAuth Pages" />
                </ListItemButton>
            </List>
        </div>
    );
}
