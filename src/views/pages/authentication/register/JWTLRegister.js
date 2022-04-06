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
    NativeSelect,
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

// ===============================|| JWT REGISTER ||=============================== //

const JWTLRegister = ({ loginIndex, ...others }) => {
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
                email: 'test@test.com',
                password: 'test123',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    const response = await login(values.email, values.password);
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
                }
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl fullWidth error={Boolean(touched.text && errors.text)} className={classes.loginInput}>
                        <InputLabel htmlFor="outlined-adornment-email-login">Nombre</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="outlined-adornment-email-login-name"
                            type="text"
                            value={values.text}
                            name="text-name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.text && errors.text && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.text}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl fullWidth error={Boolean(touched.text && errors.text)} className={classes.loginInput}>
                        <InputLabel htmlFor="outlined-adornment-email-login">Apellido</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="outlined-adornment-email-login-text-lastname"
                            type="text"
                            value={values.text}
                            name="text-lastname"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.text && errors.text && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.text}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl fullWidth error={Boolean(touched.email && errors.email)} className={classes.loginInput}>
                        <InputLabel htmlFor="outlined-adornment-email-login">Correo Electrónico</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="outlined-adornment-email-login"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.email}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth error={Boolean(touched.password && errors.password)} className={classes.loginInput}>
                        <InputLabel htmlFor="outlined-adornment-password-login">Contraseña</InputLabel>
                        <OutlinedInput  style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="outlined-adornment-password-login"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            name="password"
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
                        {touched.password && errors.password && (
                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                {' '}
                                {errors.password}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl style={{float: "left", width:"19%", border: "1px solid", borderRadius: 13}} fullWidth error={Boolean(touched.phone && errors.phone)} className={classes.loginInput}>
                        {/*<InputLabel htmlFor="outlined-adornment-email-login">Codigo</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50" }}
                            id="outlined-adornment-email-login-codigo"
                            type="select"
                            value={values.codigo }
                            menuItem ={'hola'}
                            name="codigo"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />*/}
                        <NativeSelect
                        style={{ padding:"23% 8%", border: "0px" }}
                        defaultValue={+58}
                        onBlur={handleBlur}
                            onChange={handleChange}
                        inputProps={{
                        name: "codigo-telefonico",
                        id: "codigo-telefonico",
                        }}
                    >
                        <option value={10}>+58</option>
                        <option value={20}>+57</option>
                        <option value={30}>+51</option>
                    </NativeSelect>
                        {touched.codigo && errors.codigo && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.phone}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl style={{float: "right", width:"79%"}} fullWidth error={Boolean(touched.phone && errors.phone)} className={classes.loginInput}>
                        <InputLabel htmlFor="outlined-adornment-email-login">Teléfono</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="outlined-adornment-email-login-phone"
                            type="phone"
                            value={values.phone }
                            name="phone"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.phone && errors.phone && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.phone}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl fullWidth error={Boolean(touched.select && errors.select)} className={classes.loginInput}>
                        <InputLabel htmlFor="outlined-adornment-email-login">Fecha de Nacimiento</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="outlined-adornment-email-login-birthdate"
                            type="select"
                            value={values.select }
                            name="select-birthdate"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.select && errors.select && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.select}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl style={{border: "1px solid", borderRadius: 13}} fullWidth error={Boolean(touched.select && errors.select)} className={classes.loginInput}>
                        <InputLabel htmlFor="outlined-adornment-email-login">Genero</InputLabel>
                       {/*} <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="outlined-adornment-email-login-birthdate"
                            type="select"
                            value={values.select }
                            name="genero"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />*/}
                        <NativeSelect
                        style={{ padding:"10px", border: "0px" }}
                        defaultValue={+58}
                        onBlur={handleBlur}
                            onChange={handleChange}
                        inputProps={{
                        name: "codigo-telefonico",
                        id: "codigo-telefonico",
                        }}
                    >
                        <option value={10}>Masculino</option>
                        <option value={20}>Femenino</option>
                    </NativeSelect>
                        {touched.select && errors.select && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.select}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl fullWidth error={Boolean(touched.select && errors.select)} className={classes.loginInput}>
                        <InputLabel htmlFor="outlined-adornment-email-login">Dirección de Habitación</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="outlined-adornment-email-login-birthdate"
                            type="text-area"
                            value={values.select }
                            name="genero"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.select && errors.select && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.select}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <Grid container alignItems="center" justifyContent="space-between">
                       <Grid item>
                       <Typography
                                variant="subtitle1"
                                color="secondary"
                                sx={{ textDecoration: 'none',
                            color:"#41634A" }}
                            >
                                Intereses
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                
                                style={{ textDecoration: 'none',
                            color:"#9393AA",fontSize: "11px" }}
                            >
                                Elige las areas que sean de tu interes
                            </Typography>
                      {/*}       <FormControlLabel style={{color:"#9393AA"}}
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
                            />*/}
                        </Grid>
                        {/*<Grid item>
                            <Typography
                                variant="subtitle1"
                                component={Link}
                                to={
                                    loginIndex
                                        ? `/pages/forgot-password/forgot-password${loginIndex}`
                                        : '/pages/forgot-password/forgot-password1'
                                }
                                color="secondary"
                                sx={{ textDecoration: 'none',
                            color:"#41634A" }}
                            >
                                ¿Olvidaste tu contraseña?
                            </Typography>
                        </Grid>*/}
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
        padding: "5px 18px",
        margin: "3px",
        float: "left",
        border: "1px solid", 
        borderColor: "#DB7F50",
        fontSize: "11px"
    }}color="secondary" variant="contained">
                                Deportes
                            </Button>
                        </AnimateButton>
                        <AnimateButton>
                            <Button style={{
        borderRadius: 35,
        backgroundColor: "#FFFFFF",
        padding: "5px 18px",
        margin: "3px",
        float: "left",
        fontSize: "11px",
        border: "1px solid", 
        borderColor: "#DB7F50",
        color:"#9393AA"
    }}  variant="contained">
                                Salud y Bienestar
                            </Button>
                        </AnimateButton>
                                                <AnimateButton>
                            <Button style={{
        borderRadius: 35,
        backgroundColor: "#FFFFFF",
        padding: "5px 18px",
        margin: "3px",
        float: "left",
        fontSize: "11px",
        border: "1px solid", 
        borderColor: "#DB7F50",
        color:"#9393AA"
    }}  variant="contained">
                                Parrilladas
                            </Button>
                        </AnimateButton>
                        <AnimateButton>
                            <Button style={{
        borderRadius: 35,
        backgroundColor: "#FFFFFF",
        padding: "5px 18px",
        margin: "3px",
        float: "left",
        fontSize: "11px",
        border: "1px solid", 
        borderColor: "#DB7F50",
        color:"#9393AA"
    }} variant="contained">
                                Vaijes
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

JWTLRegister.propTypes = {
    loginIndex: PropTypes.number
};

export default JWTLRegister;
