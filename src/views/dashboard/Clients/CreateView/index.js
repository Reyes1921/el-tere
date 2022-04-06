import React, { useState } from 'react';
import { Box, Button, Dialog, Grid, Step, Stepper, StepLabel, Stack, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router';

import ContactInfo from './ContactInfo';
import AddressForm from './AddressForm';
import ReviewClient from './ReviewClient';
import ClientAdded from './ClientAdded';
import { createClient, updateClient } from '../../../../actions/clientActions';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik } from 'formik';

const steps = ['Client Details', 'Address Details', 'Review Client'];

const ClientCreateView = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const isLastStep = activeStep === steps.length - 1;
    const [errorIndex, setErrorIndex] = useState(null);
    const [clientId, setClientId] = useState(null);

    const handleStepsContent = (step, formik) => {
        switch (step) {
            case 0:
                return <ContactInfo clientId={clientId} formik={formik} />;
            case 1:
                return <AddressForm clientId={clientId} formik={formik} />;
            case 2:
                return <ReviewClient formik={formik} />;
            default:
                throw new Error('Unknown step');
        }
    };

    const handleNext = async (values) => {
        setActiveStep(activeStep + 1);
        setErrorIndex(null);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const submitForm = (values, actions) => {
        actions.setSubmitting(false);
        setActiveStep(activeStep + 1);
    };

    const handleCreate = async (values, id) => {
        const response = await createClient(values);
        if (response.id) {
            navigate(`/dashboard/clients/${clientId}`);
            return 'Client created';
        }
        return 'Something went wrong';
    };

    return (
        <Box sx={{ maxWidth: '100%' }}>
            <Grid container sx={{ mt: 1 }}>
                <Grid item md={12} sx={{ px: 1 }}>
                    <Stepper activeStep={activeStep} sx={{ pb: 5, px: 1 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <ClientAdded />
                    ) : (
                        <Formik
                            enabledReinitialize
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                phone: '',
                                phoneType: '',
                                contactMethod: '',
                                clientType: '',
                                source: '',
                                address1: '',
                                address2: '',
                                city: '',
                                state: '',
                                zip: '',
                                country: ''
                            }}
                            validationScheme={Yup.object().shape({
                                firstName: Yup.string().required('First name is required'),
                                lastName: Yup.string().required('Last name is required'),
                                email: Yup.string().required('Email is required'),
                                phone: Yup.string().required('Phone is required'),
                                phoneType: Yup.string().required('Phone type is required'),
                                clientType: Yup.string().required('Client type is required'),
                                source: Yup.string().required('Source is required'),
                                address1: Yup.string().required('Address is required'),
                                city: Yup.string().required('City is required'),
                                state: Yup.string().required('State is required'),
                                zip: Yup.string().required('Zip is required')
                            })}
                            onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
                                const response = await handleCreate(values);
                                console.log(response);
                                if (response === 'Client created') {
                                    resetForm();
                                    setStatus({ success: true });
                                    setSubmitting(false);
                                    toast.success('Client created');
                                } else {
                                    setSubmitting(false);
                                    setStatus({ success: false });
                                    setErrors({ submit: 'Something went wrong' });
                                    toast.error('Something went wrong');
                                }
                            }}
                        >
                            {(formik) => (
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={1}>
                                        {handleStepsContent(activeStep, formik)}
                                    </Grid>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            px: 1,
                                            pt: 4,
                                            pb: 1
                                        }}
                                    >
                                        {activeStep !== 0 && (
                                            <Button sx={{ mr: 2, px: 4 }} variant="outlined" type="button" onClick={handleBack}>
                                                BACK
                                            </Button>
                                        )}
                                        <Button
                                            sx={{
                                                px: 2
                                            }}
                                            type="submit"
                                            variant="contained"
                                            onClick={() => handleNext(formik.values)}
                                        >
                                            {isLastStep ? 'ADD CLIENT' : 'CONTINUE'}
                                        </Button>
                                    </Box>
                                </form>
                            )}
                        </Formik>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default ClientCreateView;
