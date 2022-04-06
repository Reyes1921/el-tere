import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Box, Button, Card, Container, Grid, Link, Typography } from '@material-ui/core';

// third party
import { motion } from 'framer-motion';

// project imports
// project imports
import Avatar from 'ui-component/extended/Avatar';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
import dashboard from 'assets/images/landing/dashboard.png';
import widget1 from 'assets/images/landing/widget-1.png';
import widget2 from 'assets/images/landing/widget-2.png';

import NewHomeDoor from 'assets/images/homes/newhomedoor.jpeg';
import Couple from 'assets/images/homes/couple_move.jpeg';
import Home from 'assets/images/homes/landing_home.jpeg';

// style constant
const useStyles = makeStyles((theme) => ({
    technoImg: {
        width: '50px',
        height: '50px',
        padding: '5px',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.primary.light
    },
    headerMain: {
        maxWidth: '130%',
        borderRadius: '0px',
        transform: 'scale(1.7)',
        transformOrigin: '0 50%'
    },
    headerImg: {
        maxWidth: '100%',
        filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
    },
    btnLight: {
        background: '#E3F2FD',
        color: theme.palette.primary.main,
        borderColor: '#E3F2FD',
        boxShadow: 'none',
        '&:hover ': {
            background: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            color: '#fff'
        }
    }
}));

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Container>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={gridSpacing}
                sx={{ mt: '150px', mb: '80px', [theme.breakpoints.down('sm')]: { mt: { xs: '116px', sm: '32px' }, mb: '20px' } }}
            >
                <Grid item xs={12} md={5}>
                    <Grid
                        container
                        spacing={gridSpacing}
                        sx={{ pr: '80px', [theme.breakpoints.down('md')]: { pr: '0px', textAlign: 'center' } }}
                    >
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '36px', sm: '48px', md: '64px' },
                                        fontWeight: '900',
                                        lineHeight: { xs: '42px', sm: '56px', md: '80px' }
                                    }}
                                >
                                    Buy Your Dream Home With
                                    <Box component="span" sx={{ ml: 2, color: theme.palette.primary.main }}>
                                        PCH
                                    </Box>
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.2
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="div"
                                    color="inherit"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                        fontWeight: '400',
                                        lineHeight: { xs: '24px', md: '32px' }
                                    }}
                                >
                                    We are home loan experts dedicated to making sure your home search, purchase, and refinance experience
                                    is top-notch.
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} sx={{ my: 3.25 }}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.4
                                }}
                            >
                                <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Grid item>
                                        <AnimateButton>
                                            <Button
                                                component={RouterLink}
                                                to="/listings"
                                                target="_blank"
                                                size="large"
                                                variant="contained"
                                                color="secondary"
                                            >
                                                View Listings
                                            </Button>
                                        </AnimateButton>
                                    </Grid>
                                    <Grid item>
                                        <Button component={RouterLink} to="/refinance" target="_blank" size="large" variant="text">
                                            Refinance
                                        </Button>
                                    </Grid>
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Box sx={{ position: 'relative', zIndex: -1 }}>
                        <img src={Home} alt="Berry" className={classes.headerMain} />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '500px',
                                right: '-170px',
                                width: '290px',
                                animation: '10s slideY linear infinite',
                                zIndex: 999
                            }}
                        >
                            {/* <motion.div
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                      type: 'spring',
                                      stiffness: 150,
                                      damping: 30,
                                      delay: 0.2
                                  }}
                              >
                                  <img src={widget1} alt="Berry" className={classes.headerImg} />
                              </motion.div> */}
                        </Box>
                        {/* <Box
                          sx={{
                              position: 'absolute',
                              bottom: '-90px',
                              left: '300px',
                              width: '280px',
                              animation: '10s slideY linear infinite',
                              animationDelay: '2s'
                          }}
                      >
                          <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                  type: 'spring',
                                  stiffness: 150,
                                damping: 30,
                                  delay: 0.4
                              }}
                          >
                              <img src={widget2} alt="Berry" className={classes.headerImg} />
                          </motion.div>
                      </Box> */}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderPage;
