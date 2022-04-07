import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from '@material-ui/core';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';

// assets
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// style constant
const useStyles = makeStyles((theme) => ({
    loginInput: {
        ...theme.typography.customInput
    }
}));

// ===============================|| JWT LOGIN ||=============================== //

const JWTLogin = ({ loginIndex, ...others }) => {
    const classes = useStyles();
    const { login } = useAuth();
    const scriptedRef = useScriptRef();

    const [checked, setChecked] = React.useState(true);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Formik
            initialValues={{
                formikaLoginEmail: '',
                formikaLoginPassword: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                formikaLoginEmail: Yup.string().email('Debe ser un correo electrónico válido').max(255).required('El correo electrónico es obligatorio'),
                formikaLoginPassword: Yup.string().max(255).required('Se requiere una contraseña')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {

                {/*fetch('https://eltere-backend.herokuapp.com/api/v1/user', requestOptions)
                    .then(response => response.json())
                    .then(data => console.log(data))/*}
                {/*try {
                    const response = await login(values.formikaLoginEmail, values.formikaLoginPassword);
                    if (response.status === 400) {
                        setStatus({ success: false });
                        setErrors({ submit: response.message });
                        setSubmitting(false);
                    }

                    if (scriptedRef.current) {
                        setStatus({ success: true });
                        setSubmitting(false);
                    }
                } catch (err) {
                    console.error(err);
                    if (scriptedRef.current) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }*/}
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl fullWidth error={Boolean(touched.formikaLoginEmail && errors.formikaLoginEmail)} className={classes.loginInput}>
                        <InputLabel htmlFor="formikaLoginEmail">Correo electronico</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="formikaLoginEmail"
                            type="email"
                            value={values.formikaLoginEmail}
                            name="formikaLoginEmail"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.formikaLoginEmail && errors.formikaLoginEmail && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.formikaLoginEmail}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth error={Boolean(touched.formikaLoginPassword && errors.formikaLoginPassword)} className={classes.loginInput}>
                        <InputLabel htmlFor="formikaLoginPassword">Contraseña</InputLabel>
                        <OutlinedInput  style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="formikaLoginPassword"
                            type={showPassword ? 'text' : 'password'}
                            value={values.formikaLoginPassword}
                            name="formikaLoginPassword"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                            label="Password"
                        />
                        {touched.formikaLoginPassword && errors.formikaLoginPassword && (
                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                {' '}
                                {errors.formikaLoginPassword}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <FormControlLabel style={{color:"#9393AA"}}
                                control={
                                    <Checkbox
                                    style={{color:"#41634A"}}
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                label="Mantener la sesión"
                            />
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="subtitle1"
                                component={Link}
                                to={
                                    loginIndex
                                        ? `/forgot-password`
                                        : '/forgot-password'
                                }
                                color="secondary"
                                sx={{ textDecoration: 'none',
                            color:"#41634A" }}
                            >
                                ¿Olvidaste tu contraseña?
                            </Typography>
                        </Grid>
                    </Grid>

                    {errors.submit && (
                        <Box
                            sx={{
                                mt: 3
                            }}
                        >
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        </Box>
                    )}
                    <Box
                        sx={{
                            mt: 2
                        }}
                    >
                        <AnimateButton>
                            <Button style={{
        borderRadius: 35,
        backgroundColor: "#DB7F50",
        padding: "10px 36px",
        fontSize: "24px"
    }}color="secondary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                                INICIAR SESIÓN
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

JWTLogin.propTypes = {
    loginIndex: PropTypes.number
};

export default JWTLogin;
