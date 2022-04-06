import React, { useState } from 'react';
import { useTheme } from '@material-ui/styles';
import { useNavigate } from 'react-router';
import { Box, Grid, Typography, Button, IconButton, ButtonBase, Avatar, Fab, Tooltip } from '@material-ui/core';
import ClientList from './ListView/ClientList';
import ClientListView from './ListView';
import Add from '@material-ui/icons/Add';
import Helmet from 'react-helmet';
import ClientFormDialog from '../../ui-elements/advance/UIDialog/ClientFormDialog';

const Clients = () => {
    const theme = useTheme();
    const [clients, setClients] = useState([]);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/dashboard/clients/new');
    };

    return (
        <>
            <Helmet>
                <title>PCH Dash - Clients</title>
            </Helmet>
            <Tooltip title="Add Client">
                <Fab
                    component="div"
                    // onClick={handleAddClick}
                    size="medium"
                    variant="string"
                    color="secondary"
                    sx={{
                        top: 100,
                        m: 4,
                        position: 'fixed',
                        right: 20,
                        zIndex: theme.zIndex.speedDial,
                        boxShadow: theme.customShadows.secondary
                    }}
                >
                    <ClientFormDialog />
                </Fab>
            </Tooltip>
            <Box sx={{ maxWidth: '100%', p: 2 }}>
                <Grid container sx={{ mt: 8, mb: 4 }}>
                    <Grid item md={12}>
                        <ClientListView />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Clients;
