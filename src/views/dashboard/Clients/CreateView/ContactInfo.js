import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, Grid, Select, MenuItem, Typography, TextField, Stack } from '@material-ui/core';

import AnimateButton from 'ui-component/extended/AnimateButton';
import { useFormik } from 'formik';
import * as yup from 'yup';

const ContactForm = ({ formik }) => {
    const [value, setValue] = useState('');

    return (
        <Grid container sx={{ p: 2 }}>
            <Grid item md={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="First Name *"
                            defaultValue={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Last Name *"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Client Type</InputLabel>
                            <Select
                                labelId="clientType"
                                id="clientType"
                                value={formik.values.clientType}
                                label="Client Type"
                                onChange={(e) => formik.setFieldValue('clientType', e.target.value)}
                                autoComplete="clientType"
                            >
                                <MenuItem value="buyer">Buyer</MenuItem>
                                <MenuItem value="seller">Seller</MenuItem>
                                <MenuItem value="buyerseller">Buyer & Seller</MenuItem>
                                <MenuItem value="refinance">Refinance</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Source</InputLabel>
                            <Select
                                labelId="source"
                                id="source"
                                value={formik.values.source}
                                label="Source"
                                onChange={(e) => formik.setFieldValue('source', e.target.value)}
                                autoComplete="source"
                                autoFocus
                            >
                                <MenuItem value="website">Website</MenuItem>
                                <MenuItem value="google">Google</MenuItem>
                                <MenuItem value="friendfamily">Friend/Family</MenuItem>
                                <MenuItem value="advertising">Advertising</MenuItem>
                                <MenuItem value="commercial">Commercial</MenuItem>
                                <MenuItem value="realtor">Realtor</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            id="phone"
                            name="phone"
                            label="Phone *"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            fullWidth
                            autoComplete="phone"
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formik.values.phoneType}
                                label="Type"
                                onChange={(e) => formik.setFieldValue('phoneType', e.target.value)}
                                autoComplete="phoneType"
                            >
                                <MenuItem value="mobile">Mobile</MenuItem>
                                <MenuItem value="home">Home</MenuItem>
                                <MenuItem value="work">Work</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email *"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            fullWidth
                            autoComplete="email"
                        />
                    </Grid>

                    <Grid item xs={5}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Preferred Contact Method</InputLabel>
                            <Select
                                labelId="contactMethod"
                                id="contactMethod"
                                value={formik.values.contactMethod}
                                label="Preferred Contact Method"
                                onChange={(e) => formik.setFieldValue('contactMethod', e.target.value)}
                                autoComplete="contactMethod"
                            >
                                <MenuItem value="phone">Phone</MenuItem>
                                <MenuItem value="email">Email</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ContactForm;
