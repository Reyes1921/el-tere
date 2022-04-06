import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Box, Grid, CardMedia, CardContent, Typography, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MainCard from './MainCard';
import SkeletonProductPlaceholder from 'ui-component/cards/Skeleton/ProductPlaceholder';

import { FaBed, FaBath } from 'react-icons/fa';

const nodeURL = process.env.REACT_APP_STRAPI_URL || null;

const useStyles = makeStyles((theme) => ({
    cityChip: {
        display: 'flex',
        position: 'absolute',
        top: '10',
        right: '10'
    }
}));

const ListingCard = ({ id, name, image, price, bedroom, bath, sqFt, address, city, state, zip, homeType }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading ? (
                <SkeletonProductPlaceholder />
            ) : (
                <MainCard
                    content={false}
                    boxShadow
                    sx={{
                        '&:hover': {
                            transform: 'scale3d(1.02, 1.02, 1)',
                            transition: 'all .4s ease-in-out'
                        }
                    }}
                >
                    <span className={classes.cityChip}>
                        {/* <Chip label={`${city}, ${state}`} color="primary" /> */}
                        <Box
                            sx={{
                                backgroundColor: '#414141',
                                opacity: 0.7,
                                display: 'flex',
                                position: 'absolute',
                                top: 10,
                                left: 10,
                                px: 1,
                                py: 0.35
                            }}
                        >
                            <div>
                                <Typography variant="h6" color="#fff" fontWeight="600" sx={{ display: 'inline' }}>
                                    {city},
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="h6" color="#fff" sx={{ display: 'inline', ml: 0.5 }}>
                                    {state}
                                </Typography>
                            </div>
                        </Box>
                    </span>
                    <CardMedia component="img" image={`${nodeURL}${image?.url}`} title={`${name}`} />
                    <CardContent>
                        <Grid container>
                            <Grid item md={4}>
                                <Typography variant="h4">${price}</Typography>
                            </Grid>
                            <Grid item md={1}>
                                <Typography variant="h5" textAlign="right" sx={{ pr: 0.75 }}>
                                    {bedroom}
                                </Typography>
                            </Grid>
                            <Grid item md={1}>
                                <FaBed size="1.2rem" />
                            </Grid>
                            <Grid item md={1}>
                                <Typography variant="h5" textAlign="right" sx={{ pr: 0.75 }}>
                                    {bath}
                                </Typography>
                            </Grid>
                            <Grid item md={1}>
                                <FaBath size="1rem" />
                            </Grid>

                            <Grid item md={3}>
                                <Typography variant="h5" textAlign="right">
                                    {sqFt} sqft
                                </Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant="subtitle2">{address}</Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant="subtitle1">{homeType} for sale</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </MainCard>
            )}
        </>
    );
};

ListingCard.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.number,
    bedroom: PropTypes.number,
    bath: PropTypes.number,
    sqFt: PropTypes.number,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string
};

export default ListingCard;
