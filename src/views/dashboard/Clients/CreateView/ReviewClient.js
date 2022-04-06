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
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4)
    }
}));

const ReviewClient = ({ formik }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item md={12} textAlign="center">
                <CheckCircle className={classes.checkIcon} />
            </Grid>
            <Grid item md={12} textAlign="center">
                <Typography variant="h3">{formik.values.firstName}</Typography>
            </Grid>
            <Grid item md={12} textAlign="center">
                <Typography variant="h3">{formik.values.lastName}</Typography>
            </Grid>
        </Grid>
    );
};

export default ReviewClient;
