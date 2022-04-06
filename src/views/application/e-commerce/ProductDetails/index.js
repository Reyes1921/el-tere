import PropTypes from 'prop-types';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Box, Chip, Grid, Stack, Tab, Tabs, Typography } from '@material-ui/core';

// project imports
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ProductReview from './ProductReview';
import RelatedProducts from './RelatedProducts';
import MainCard from 'ui-component/cards/MainCard';
import FloatingCart from 'ui-component/cards/FloatingCart';
import axios from 'utils/axios';
import { RESET_CART } from 'store/actions';
import { gridSpacing } from 'store/constant';

// style constant
const useStyles = makeStyles((theme) => ({
    accountTab: {
        marginBottom: '24px',
        minHeight: 'auto',
        '& button': {
            minWidth: '100px'
        },
        '& a': {
            minHeight: 'auto',
            minWidth: '10px',
            padding: '12px 8px',
            marginRight: '18px',
            color: theme.palette.grey[600]
        },
        '& a.Mui-selected': {
            color: theme.palette.primary.main
        }
    }
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

// tabs
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box
                    sx={{
                        p: 0
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

// ===========================|| PRODUCT DETAILS ||=========================== //

const ProductDetails = () => {
    const classes = useStyles();
    const history = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { id } = useParams();

    const [product, setProduct] = React.useState(null);

    const getProduct = async () => {
        const response = await axios.post('/api/product/details', { id });
        setProduct(response.data.results);
        if (id === 'default') {
            history(`/e-commerce/product-details/${response.data.results.id}`);
        }
    };

    React.useEffect(() => {
        getProduct();

        // clear cart if complete order
        if (cart.checkout.step > 2) {
            dispatch({ type: RESET_CART });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
            <Grid item xs={12} lg={10}>
                <MainCard>
                    {product && (
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6}>
                                <ProductImages product={product} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ProductInfo product={product} />
                            </Grid>
                            <Grid item xs={12}>
                                <Tabs
                                    value={value}
                                    indicatorColor="primary"
                                    onChange={handleChange}
                                    className={classes.accountTab}
                                    aria-label="simple tabs example"
                                    variant="scrollable"
                                >
                                    <Tab component={Link} to="#" label="Description" {...a11yProps(0)} />
                                    <Tab
                                        component={Link}
                                        to="#"
                                        label={
                                            <Stack direction="row" alignItems="center">
                                                Reviews <Chip label={product.salePrice} size="small" color="secondary" sx={{ ml: 1.5 }} />
                                            </Stack>
                                        }
                                        {...a11yProps(1)}
                                    />
                                </Tabs>
                                <TabPanel value={value} index={0}>
                                    <ProductDescription />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <ProductReview product={product} />
                                </TabPanel>
                            </Grid>
                        </Grid>
                    )}
                </MainCard>
            </Grid>
            <Grid item xs={12} lg={10} sx={{ mt: 3 }}>
                <Typography variant="h2">Related Products</Typography>
            </Grid>
            <Grid item xs={11} lg={10}>
                <RelatedProducts id={id} />
            </Grid>
            <FloatingCart />
        </Grid>
    );
};

export default ProductDetails;
