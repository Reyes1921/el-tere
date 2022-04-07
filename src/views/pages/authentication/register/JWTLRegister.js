import PropTypes from 'prop-types';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// material-ui

import { makeStyles } from '@material-ui/styles';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
//import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';

// assets
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// style constant
const useStyles = makeStyles((theme) => ({
    loginInput: {
        ...theme.typography.customInput
    }
}))

// ===============================|| JWT REGISTER ||=============================== //

const JWTLRegister = ({ loginIndex, ...others }) => {
    const classes = useStyles();
   // const { login } = useAuth();
    const scriptedRef = useScriptRef();

   
    const [checked, setChecked] = useState(true);

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
                formikaName: '',
                formikaLastName: '',
                formikaEmail: '',
                formikaPassword: '',
                formikaPhone: '',
                formikaDate: '',
                formikaAddress: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                formikaName: Yup.string()
                .min(2, '¡Muy corto!')
                .max(50, '¡Muy Largo!')
                .required('Campo requerido'),
                formikaLastName: Yup.string()
                .min(2, '¡Muy corto!')
                .max(50, '¡Muy Largo!')
                .required('Campo requerido'),
                formikaEmail: Yup.string()
                .email('Debe ser un correo electrónico válido')
                .min(8, '¡Muy corto!')
                .max(50, '¡Muy Largo!')
                .required('Campo requerido'),
                formikaPassword: Yup.string()
                .min(2, '¡Muy corto!')
                .max(50, '¡Muy Largo!')
                .required('Campo requerido'),
                formikaPhone: Yup.string()
                .min(7, '¡Muy corto!')
                .max(15, '¡Muy Largo!')
                .required('Campo requerido'),
                formikaDate: Yup.string()
                .min(8, '¡Muy corto!')
                .max(50, '¡Muy Largo!')
                .required('Campo requerido'),
                formikaAddress: Yup.string()
                .min(2, '¡Muy corto!')
                .max(50, '¡Muy Largo!')
                .required('Campo requerido'),

            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                
                const userRegister = {
                    "email": values.formikaEmail,
                    "password": values.formikaPassword,
                    "firstName": values.formikaName,
                    "lastName": values.formikaLastName,
                    "cellphone": values.formikaPhone,
                    "gender": 'M',
                    "birthday": values.formikaDate,
                    "roleId": 1500
                }

                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userRegister)
                };
                fetch('https://eltere-backend.herokuapp.com/api/v1/user', requestOptions)
                    .then(response => response.json())
                    .then(data => console.log(data))

                    console.log(checked);
              
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl fullWidth error={Boolean(touched.formikaName && errors.formikaName)} className={classes.loginInput}>
                        <InputLabel htmlFor="formikaName">Nombre</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="formikaName"
                            type="text"
                            value={values.formikaName}
                            name="formikaName"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.formikaName && errors.formikaName && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.formikaName}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl fullWidth error={Boolean(touched.formikaLastName && errors.formikaLastName)} className={classes.loginInput}>
                        <InputLabel htmlFor="formikaLastName">Apellido</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="formikaLastName"
                            type="text"
                            value={values.formikaLastName}
                            name="formikaLastName"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}endAdornment={
                                <InputAdornment position="start">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>}
                            
                        />
                        {touched.formikaLastName && errors.formikaLastName && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.formikaLastName}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl fullWidth error={Boolean(touched.formikaEmail && errors.formikaEmail)} className={classes.loginInput}>
                        <InputLabel htmlFor="formikaEmail">Correo Electrónico</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="formikaEmail"
                            type="email"
                            value={values.formikaEmail}
                            name="formikaEmail"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.formikaEmail && errors.formikaEmail && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.formikaEmail}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth error={Boolean(touched.formikaPassword && errors.formikaPassword)} className={classes.loginInput}>
                        <InputLabel htmlFor="formikaPassword">Contraseña</InputLabel>
                        <OutlinedInput  style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="formikaPassword"
                            type={showPassword ? 'text' : 'password'}
                            value={values.formikaPassword}
                            name="formikaPassword"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="start">
                                    
                                </InputAdornment>
                            }
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                            label="Password"
                        />
                        {touched.formikaPassword && errors.formikaPassword && (
                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                {' '}
                                {errors.formikaPassword}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                   {/*} <FormControl style={{float: "left", width:"19%", border: "1px solid", borderRadius: 13}} fullWidth error={Boolean(touched.phone && errors.phone)} className={classes.loginInput}>
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
                        </FormControl>*/}
                    <FormControl style={{float: "right"}} fullWidth error={Boolean(touched.formikaPhone && errors.formikaPhone)} className={classes.loginInput}>
                        <InputLabel htmlFor="formikaPhone">Teléfono (Ej:04265555555 )</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="formikaPhone"
                            type="phone"
                            value={values.formikaPhone }
                            name="formikaPhone"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.formikaPhone && errors.formikaPhone && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.formikaPhone}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl fullWidth error={Boolean(touched.formikaDate && errors.formikaDate)} className={classes.loginInput}>
                        <InputLabel htmlFor="formikaDate">Fecha de Nacimiento</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="formikaDate"
                            type="select"
                            value={values.formikaDate}
                            name="formikaDate"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.formikaDate && errors.formikaDate && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.formikaDate}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl style={{border: "1px solid", borderRadius: 13}} fullWidth error={Boolean(touched.formikaGender && errors.formikaGender)} className={classes.loginInput}>
                        <InputLabel htmlFor="formikaGender">Genero</InputLabel>
                        <NativeSelect
                        style={{ padding:"10px", border: "0px" }}
                        defaultValue={''}
                        value={checked}
                        onBlur={handleBlur}
                        onChange={(event) => setChecked(event.target.checked)}
                        inputProps={{
                        name: "formikaGender",
                        id: "formikaGender",
                        }}
                    >
                        <option value={'M'}>M</option>
                        <option value={'F'}>F</option>
                    </NativeSelect>
                        {touched.formikaGender && errors.formikaGender && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.formikaGender}{' '}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl fullWidth error={Boolean(touched.formikaAddress && errors.formikaAddress)} className={classes.loginInput}>
                        <InputLabel htmlFor="formikaAddress">Dirección de Habitación Ej:Carrera 27, Calle34.</InputLabel>
                        <OutlinedInput style={{ border: "1px solid", borderColor: "#DB7F50"}}
                            id="formikaAddress"
                            type="text-area"
                            value={values.formikaAddress }
                            name="formikaAddress"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        />
                        {touched.formikaAddress && errors.formikaAddress && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {errors.formikaAddress}{' '}
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
                      
                    <Box>               
                            <Button style={{
        borderRadius: 35,
        backgroundColor: "#DB7F50",
        padding: "10px 36px",
        fontSize: "24px",
        margin:"5% 0% 0% 0%"
    }}color="secondary"  fullWidth size="large" type="submit" variant="contained">
                                QUIERO UNIRME
                            </Button>
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
