import React, { useState } from 'react';
import { Autocomplete, Grid, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import states from '../../../../utils/states';
import countries from '../../../../utils/countries';

const AddressForm = ({ formik, clientId }) => {
    const [value, setValue] = useState('');

    return (
        <Grid container sx={{ p: 1 }}>
            <input type="hidden" value={clientId} />
            <Grid item md={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="address1"
                            name="address1"
                            label="Address 1"
                            value={formik.values.address1}
                            onChange={formik.handleChange}
                            error={formik.touched.address1 && Boolean(formik.errors.address1)}
                            helperText={formik.touched.address1 && formik.errors.address1}
                            fullWidth
                            autoComplete="address1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="address2"
                            name="address2"
                            label="Address 2"
                            value={formik.values.address2}
                            onChange={formik.handleChange}
                            autoComplete="address2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            getOptionLabel={(option) => option.value}
                            options={states}
                            renderInput={(params) => (
                                <TextField
                                    fullWidth
                                    id="state"
                                    name="state"
                                    label="State/Province/Region"
                                    autoComplete="shipping state"
                                    value={formik.values.state}
                                    onChange={(e) => formik.setFieldValue('state', e.target.value)}
                                    error={formik.touched.state && Boolean(formik.errors.state)}
                                    helperText={formik.touched.state && formik.errors.state}
                                    {...params}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            value={formik.values.zip}
                            autoComplete="shipping zip"
                            onChange={formik.handleChange}
                            error={formik.touched.zip && Boolean(formik.errors.zip)}
                            helperText={formik.touched.zip && formik.errors.zip}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            getOptionLabel={(option) => option.text}
                            options={countries}
                            renderInput={(params) => (
                                <TextField
                                    fullWidth
                                    id="country"
                                    name="country"
                                    label="Country"
                                    autoComplete="shipping country"
                                    value={formik.values.country}
                                    onChange={(e) => formik.setFieldValue('country', e.target.value)}
                                    {...params}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AddressForm;
