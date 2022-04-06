import React from 'react';

// material-ui
import { CardMedia, Grid, Typography, useMediaQuery } from '@material-ui/core';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import imageEmpty from 'assets/images/e-commerce/empty.png';

// ===========================|| CHECKOUT CART - NO/EMPTY CART ITEMS ||=========================== //

const CartEmpty = () => {
    const matchDownMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <Grid container justifyContent="center" spacing={gridSpacing} sx={{ my: 3 }}>
            <Grid item xs={12} sm={8} md={6}>
                <CardMedia component="img" image={imageEmpty} title="Slider5 image" />
            </Grid>
            <Grid item xs={12} sm={8}>
                <Grid container direction="column" alignItems="center" spacing={1}>
                    <Grid item>
                        <Typography variant={matchDownMD ? 'h3' : 'h1'} color="inherit">
                            Cart is Empty
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="center">
                            Look like you have no items in your shopping cart.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CartEmpty;
