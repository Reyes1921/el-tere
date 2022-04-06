import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItemButton';

// assets
import ViewCompactTwoToneIcon from '@material-ui/icons/ViewCompactTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';

// style constant
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
}));

// ================================|| UI LIST - SIMPLE LIST ||================================ //

export default function SimpleList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton>
                    <ListItemIcon>
                        <ViewCompactTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Sample Page" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DescriptionTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Elements" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListAltTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Page Layouts" />
                </ListItemButton>
            </List>
        </div>
    );
}
