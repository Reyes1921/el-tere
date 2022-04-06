import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery, Button } from '@material-ui/core';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AnimateButton from 'ui-component/extended/AnimateButton';
import PCHLogo from 'assets/images/LOGOELTERE.png';
import AuthCardWrapper from '../AuthCardWrapper';
// import FirebaseLogin from './FirebaseLogin';
import JWTLogin from './JWTLogin';
import AuthFooter from 'ui-component/cards/AuthFooter';

// ================================|| LOGIN MAIN ||================================ //

const Login = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AuthWrapper1 style={{backgroundColor:"#DB7F50"}}>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item style={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper style={{
                                borderRadius: 20,
                                backgroundColor: "#FFFFFF",
                                fontSize: "24px",
                                border: "2px solid ",
                                borderColor:"#41634A",
                                color: "#DB7F50",

                            }}>
                                <Grid container spacing={1} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <RouterLink to="/">
                                            {/* <Logo /> */}
                                            <img src={PCHLogo} alt="pch logo" width="150px" />
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : ''}>
                                                        Inicia sesión con tu cuenta:
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <JWTLogin />
                                    </Grid>
                                    <Grid item xs={12}>
                                        
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                         
                            <Button style={{
        borderRadius: 35,
        backgroundColor: "#FFFFFF",
        padding: "10px 36px",
        fontSize: "24px",
        border: "1px solid ",
        borderColor:"#DB7F50",
        color: "#DB7F50"
    }}color="secondary"  fullWidth size="large" type="submit" variant="contained" component={RouterLink} to="/register">
                                ÚNETE AL TERE
                            </Button>
                        
                                          {/*  <Typography
                                                component={RouterLink}
                                                 
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Crear una cuenta
                                            </Typography>*/}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Login;
