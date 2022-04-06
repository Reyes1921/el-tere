import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Collapse, List, ListItemIcon, ListItemText } from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItemButton';

// assets
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ViewCompactTwoToneIcon from '@material-ui/icons/ViewCompactTwoTone';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// style constant
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));

// ================================|| UI LIST - NESTED ||================================ //

export default function NestedList() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ViewCompactTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                </ListItemIcon>
                <ListItemText primary="1st Level with Icon" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton className={classes.nested}>
                        <ListItemIcon>
                            <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                        </ListItemIcon>
                        <ListItemText primary="Nested List" />
                    </ListItemButton>
                    <ListItemButton className={classes.nested}>
                        <ListItemIcon>
                            <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                        </ListItemIcon>
                        <ListItemText primary="Nested List" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}
