import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@material-ui/core';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import PCHLogo from 'assets/images/LOGOELTERE.png';
import FirebaseForgotPassword from '../firebase-forms/FirebaseForgotPassword';
import BackgroundPattern1 from 'ui-component/cards/BackgroundPattern1';
import AuthSlider from 'ui-component/cards/AuthSlider';

// assets
import AuthMultiCard from 'assets/images/auth/auth-forgot-pass-multi-card.svg';

// style constant
const useStyles = makeStyles((theme) => ({
    authPurpleCard: {
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '18%',
            left: '18%',
            width: '515px',
            height: '470px',
            backgroundImage: `url(${AuthMultiCard})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: '15s wings ease-in-out infinite',
            animationDelay: '1s',
            [theme.breakpoints.down('lg')]: {
                top: '10%',
                left: '6%',
                backgroundSize: '450px'
            }
        }
    }
}));

// carousel items
const items = [
    {
        title: 'Powerful and easy to use multipurpose theme.',
        description: 'Powerful and easy to use multipurpose theme'
    },
    {
        title: 'Power of React with Material UI',
        description: 'Powerful and easy to use multipurpose theme'
    },
    {
        title: 'Power of React with Material UI',
        description: 'Powerful and easy to use multipurpose theme'
    }
];

// ============================|| AUTH1 - FORGOT PASSWORD ||============================ //

const ForgotPassword = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AuthWrapper1 style={{backgroundColor:"#DB7F50"}}>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ minHeight: '100vh' }}>
                <Grid item container justifyContent="center"  sx={{ my: 3 }}>
                    <AuthCardWrapper style={{border: "2px solid ",
                                borderColor:"#41634A",}}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12}>
                                <Grid
                                    
                                    direction={matchDownSM ? 'column-reverse' : 'row'}
                                    alignItems={matchDownSM && 'center'}
                                    justifyContent={matchDownSM ? 'center' : 'space-between'}
                                >
                                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                                        <RouterLink to="#">
                                            {/*<Logo />*/}
                                            <img src={PCHLogo} alt="pch logo" width="150px" />
                                        </RouterLink>
                                    </Grid>
                                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                                        <Stack
                                        
                                            textAlign={matchDownSM ? 'center' : ''}
                                        >
                                            <Typography
                                                style={{color: "#9393AA", padding: "15px"}}
                                                gutterBottom
                                                
                                            >
                                                Únete y forma parte de los comercios de EL TERE
                                            </Typography>
                                            <Typography style={{color: "#DB7F50", padding: "5px", fontSize: "32px", textAlign: "center"}} color="textPrimary" gutterBottom variant="h4">
                                               Recupera tu cuenta
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid style={{backgroundColor:"#F4F5F7",borderRadius: 10, padding: "15px"}}>
                            <Grid item xs={12}>
                            <Typography style={{color: "#41634A",textAlign: "center"}} color="textPrimary" gutterBottom variant="h4">
                            ¡No te preocupes!
                                            </Typography>
                                <Stack direction="row" justifyContent={matchDownSM ? 'center' : 'flex-start'}>
                                    <Typography style={{textAlign: "center"}} variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : ''}>
                                        Recupera el acceso a tu cuenta ingresando tu dirección de correo electrónico y te enviamos un correo de rcuperación:
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <FirebaseForgotPassword />
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                            </Grid>
                            {/*<Grid item xs={12}>
                                <Grid item container direction="column" alignItems="flex-end" xs={12}>
                                    <Typography
                                        component={RouterLink}
                                        to="/pages/login/login1"
                                        variant="subtitle1"
                                        sx={{ textDecoration: 'none' }}
                                    >
                                        Have an account?
                                    </Typography>
                                </Grid>
                            </Grid>*/}
                        </Grid>
                    </AuthCardWrapper>
                </Grid>
                <Grid  style={{textAlign: "center",backgroundColor: "#FFFFFF", padding:"13px", width: "100%"}}>
                            <Typography style={{color:"#41634A",fontSize:"24px",textAlign: "center",backgroundColor: "#FFFFFF", padding:"10px", width: "100%"}} variant="caption" fontSize="16px">
                                        ¡Correo Enviado!
                                    </Typography>
                            </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default ForgotPassword;
