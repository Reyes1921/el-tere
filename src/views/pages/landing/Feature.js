import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// assets
import PaletteTwoToneIcon from '@material-ui/icons/PaletteTwoTone';
import ReorderTwoToneIcon from '@material-ui/icons/ReorderTwoTone';
import SpeedTwoToneIcon from '@material-ui/icons/SpeedTwoTone';

import CalculateIcon from '@material-ui/icons/Calculate';
import HouseIcon from '@material-ui/icons/House';

import { FaPercentage } from 'react-icons/fa';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeaturePage = () => {
    const theme = useTheme();
    return (
        <Container>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={5} md={10}>
                    <Grid container spacing={2} sx={{ mb: '16px' }}>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Typography variant="h5" color="primary">
                                        Top Features
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h2" component="div">
                                What Berry brings to you?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Berry is a solid dashboard template for your next project, with the following top features.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.secondary.light,
                                                    color: theme.palette.secondary.main
                                                }}
                                            >
                                                <HouseIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">Home Buyer</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                Warm color palates and minimally designed interfaces make the user experience more
                                                comfortable.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.secondary.light,
                                                    color: theme.palette.secondary.main
                                                }}
                                            >
                                                <CalculateIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">Refinance</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                Technology behind Berry is less complicated so you can focus on creating the actual web
                                                applications.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.secondary.light,
                                                    color: theme.palette.secondary.main
                                                }}
                                            >
                                                <FaPercentage fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">Rates</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                Code that makes it easier and faster to render the page for your web applications.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FeaturePage;
