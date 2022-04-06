import React, { useState } from 'react';
import { Button, Grid, Card, CardActions, CardContent, CardMedia, CardHeader, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Card1 from 'assets/images/cards/card-1.jpg';
import { FaBed, FaBath } from 'react-icons/fa';
import ListingCard from 'ui-component/cards/ListingCard';

const nodeURL = process.env.REACT_APP_STRAPI_URL || null;

const useStyles = makeStyles((theme) => ({
    root: {},
    card: {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100],
        boxShadow: 10
    },
    cityChip: {
        display: 'flex',
        position: 'absolute',
        top: '10',
        right: '10'
    }
}));

const ListingsGrid = ({ listings }) => {
    const classes = useStyles();

    console.log(listings);

    return (
        <>
            <Grid container spacing={5} sx={{ p: 3 }}>
                {listings.map((listing, index) => (
                    <Grid key={index} item xs={12} sm={12} md={4} lg={4}>
                        <ListingCard
                            id={listing.id}
                            name={listing.name}
                            image={listing.image}
                            price={listing.price}
                            bedroom={listing.bedroom}
                            bath={listing.bath}
                            sqFt={listing.sqFt}
                            address={listing.address}
                            city={listing.city}
                            state={listing.state}
                            zip={listing.zip}
                            homeType={listing.homeType}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ListingsGrid;
