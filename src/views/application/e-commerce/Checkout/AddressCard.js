import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Button, Chip, IconButton, Grid, Stack, Typography } from '@material-ui/core';

// project imports
import SubCard from 'ui-component/cards/SubCard';

// assets
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

// ===========================|| CHECKOUT BILLING ADDRESS - ADDRESS CARD ||=========================== //

const AddressCard = ({ address, single, change, handleClickOpen, billingAddressHandler, onBack }) => (
    <SubCard sx={{ height: single ? 'auto' : '100%' }}>
        <Grid container spacing={2}>
            {single && (
                <Grid item xs={12}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant={change ? 'h3' : 'h3'}>Shipping Address</Typography>
                        {change && (
                            <Button variant="contained" size="small" color="primary" startIcon={<EditTwoToneIcon />} onClick={onBack}>
                                Change
                            </Button>
                        )}
                    </Stack>
                </Grid>
            )}
            <Grid item xs={12}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Typography variant="subtitle1">{address.name}</Typography>
                        <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>
                            ({address.destination})
                        </Typography>
                    </Stack>
                    {address.isDefault && <Chip color="primary" label="Default" size="small" />}
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Stack spacing={0.5}>
                    <Typography variant="body2">
                        {`${address.building}, ${address.street}, ${address.city}, ${address.state}, ${address.country}, ${address.post}`}
                    </Typography>
                    <Typography variant="caption" color="secondary">
                        {address.phone}
                    </Typography>
                </Stack>
            </Grid>
            {!single && (
                <Grid item xs={12}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Button variant="outlined" onClick={() => billingAddressHandler(address)}>
                            Deliver to this Address
                        </Button>
                        <Stack direction="row" alignItems="center" spacing={0}>
                            <IconButton size="small" onClick={() => handleClickOpen(address)}>
                                <EditTwoToneIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small">
                                <DeleteTwoToneIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Grid>
            )}
        </Grid>
    </SubCard>
);

AddressCard.propTypes = {
    address: PropTypes.object,
    single: PropTypes.bool,
    change: PropTypes.bool,
    handleClickOpen: PropTypes.func,
    billingAddressHandler: PropTypes.func,
    onBack: PropTypes.func
};

export default AddressCard;
