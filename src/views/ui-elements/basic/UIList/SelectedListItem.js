import React from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItemButton';

// assets
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
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

// ================================|| UI LIST - SELECTED LIST ||================================ //

export default function SelectedListItem() {
    const classes = useStyles();
    const customization = useSelector((state) => state.customization);

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    sx={{ borderRadius: `${customization.borderRadius}px` }}
                >
                    <ListItemIcon>
                        <HomeTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Sample Page" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                    sx={{ borderRadius: `${customization.borderRadius}px`, mt: '5px' }}
                >
                    <ListItemIcon>
                        <DescriptionTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Elements" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ borderRadius: `${customization.borderRadius}px`, mt: '5px' }}
                >
                    <ListItemIcon>
                        <ListAltTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Page Layouts" />
                </ListItemButton>
            </List>
        </div>
    );
}
