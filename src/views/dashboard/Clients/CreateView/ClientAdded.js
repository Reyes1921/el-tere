import React from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from 'react-router-dom';
import CheckCircle from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
    root: {},
    checkIcon: {
        fontSize: 90,
        fontWeight: 300,
        color: 'green',
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(5)
    }
}));

const ClientAdded = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/dashboard/clients`);
    };

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item md={12} textAlign="center">
                <CheckCircle className={classes.checkIcon} />
            </Grid>
            <Grid item md={12} textAlign="center">
                <Typography variant="h3">Client Added!</Typography>
            </Grid>

            <Grid item sx={{ mb: 4 }}>
                <Box
                    sx={{
                        display: 'flex',
                        py: 2
                    }}
                >
                    <Button color="button" variant="contained" sx={{ px: 4 }} onClick={handleClick}>
                        Go to Clients
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ClientAdded;
