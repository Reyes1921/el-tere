import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { styled } from '@material-ui/styles';
import { Grid, Tab, Tabs, Typography } from '@material-ui/core';

// project imports
import CartEmpty from './CartEmpty';
import Cart from './Cart';
import BillingAddress from './BillingAddress';
import Payment from './Payment';
import MainCard from 'ui-component/cards/MainCard';
import axios from 'utils/axios';
import {
    BACK_STEP,
    NEXT_STEP,
    REMOVE_PRODUCT,
    SET_STEP,
    SNACKBAR_OPEN,
    UPDATE_QUANTITY,
    SET_BILLING_ADDRESS,
    SET_SHIPPING_CHARGE
} from 'store/actions';
import { gridSpacing } from 'store/constant';

// assets
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import ApartmentIcon from '@material-ui/icons/Apartment';
import CreditCardTwoToneIcon from '@material-ui/icons/CreditCardTwoTone';

const StyledTab = styled((props) => <Tab {...props} />)(({ theme, customization, value, cart }) => ({
    color: cart.checkout.step >= value ? theme.palette.success.dark : theme.palette.grey[600],
    minHeight: 'auto',
    minWidth: '250px',
    padding: 16,
    borderRadius: `${customization.borderRadius}px`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    textAlign: 'left',
    justifyContent: 'flex-start',
    '&.Mui-selected': {
        color: theme.palette.primary.main,
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50]
    },
    '& > svg': {
        marginBottom: '0px !important',
        marginRight: 10,
        marginTop: 2,
        height: '20px',
        width: '20px'
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: '100%'
    }
}));

// tabs option
const tabsOption = [
    {
        label: 'User Profile',
        icon: <ShoppingCartTwoToneIcon />,
        caption: 'Product Added'
    },
    {
        label: 'Billing Address',
        icon: <ApartmentIcon />,
        caption: 'Billing Information'
    },
    {
        label: 'Payment',
        icon: <CreditCardTwoToneIcon />,
        caption: 'Add & Update Card'
    }
];

// tabs
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <div>{children}</div>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

// ===========================|| PRODUCT - CHECKOUT MAIN ||=========================== //

const Checkout = () => {
    const customization = useSelector((state) => state.customization);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const isCart = cart.checkout.products && cart.checkout.products.length > 0;

    const [value, setValue] = React.useState(cart.checkout.step > 2 ? 2 : cart.checkout.step);
    const [billing, setBilling] = React.useState(cart.checkout.billing);
    const [address, setAddress] = React.useState(null);

    const getAddress = async () => {
        const response = await axios.get('/api/address/list');
        setAddress(response.data.address);
    };

    React.useEffect(() => {
        getAddress();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addAddress = async (address) => {
        const response = await axios.post('/api/address/new', {
            data: address
        });
        setAddress(response.data.address);
    };

    const editAddress = async (address) => {
        const response = await axios.post('/api/address/edit', {
            data: address
        });
        setAddress(response.data.address);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        dispatch({ type: SET_STEP, step: newValue });
    };

    React.useEffect(() => {
        setValue(cart.checkout.step > 2 ? 2 : cart.checkout.step);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart.checkout.step]);

    const removeProduct = (id) => {
        dispatch({ type: REMOVE_PRODUCT, id });
        dispatch({
            type: SNACKBAR_OPEN,
            open: true,
            message: 'Update Cart Success',
            variant: 'alert',
            alertSeverity: 'success'
        });
    };

    const updateQuantity = (id, quantity) => {
        dispatch({ type: UPDATE_QUANTITY, id, quantity });
    };

    const onNext = () => {
        dispatch({ type: NEXT_STEP });
    };

    const onBack = () => {
        dispatch({ type: BACK_STEP });
    };

    const billingAddressHandler = (address) => {
        if (billing !== null || address !== null) {
            if (address !== null) {
                setBilling(address);
            }

            dispatch({ type: SET_BILLING_ADDRESS, address: address !== null ? address : billing });
            onNext();
        } else {
            dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Please select delivery address',
                variant: 'alert',
                alertSeverity: 'error'
            });
        }
    };

    const handleShippingCharge = (type) => {
        dispatch({ type: SET_SHIPPING_CHARGE, value: type });
    };

    return (
        <MainCard>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="icon label tabs example"
                        variant="scrollable"
                        sx={{
                            '& .MuiTabs-flexContainer': {
                                borderBottom: 'none'
                            },
                            '& .MuiTabs-indicator': {
                                display: 'none'
                            },
                            '& .MuiButtonBase-root + .MuiButtonBase-root': {
                                position: 'relative',
                                overflow: 'visible',
                                ml: '16px',
                                '&:after': {
                                    content: '""',
                                    bgcolor: '#ccc',
                                    width: '1px',
                                    height: 'calc(100% - 16px)',
                                    position: 'absolute',
                                    top: '8px',
                                    left: '-8px'
                                }
                            }
                        }}
                    >
                        {tabsOption.map((tab, index) => (
                            <StyledTab
                                customization={customization}
                                value={index}
                                cart={cart}
                                disabled={index > cart.checkout.step}
                                key={index}
                                icon={tab.icon}
                                label={
                                    <Grid container direction="column">
                                        <Typography variant="subtitle1" color="inherit">
                                            {tab.label}
                                        </Typography>
                                        <Typography component="div" variant="caption" sx={{ textTransform: 'capitalize' }}>
                                            {tab.caption}
                                        </Typography>
                                    </Grid>
                                }
                            />
                        ))}
                    </Tabs>
                </Grid>
                <Grid item xs={12}>
                    <TabPanel value={value} index={0}>
                        {isCart && (
                            <Cart checkout={cart.checkout} onNext={onNext} removeProduct={removeProduct} updateQuantity={updateQuantity} />
                        )}
                        {!isCart && <CartEmpty />}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <BillingAddress
                            checkout={cart.checkout}
                            onBack={onBack}
                            onNext={onNext}
                            billingAddressHandler={billingAddressHandler}
                            address={address}
                            addAddress={addAddress}
                            editAddress={editAddress}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Payment checkout={cart.checkout} onBack={onBack} onNext={onNext} handleShippingCharge={handleShippingCharge} />
                    </TabPanel>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Checkout;
