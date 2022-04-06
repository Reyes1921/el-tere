import React, { useState, useCallback, useEffect } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import ListingsGrid from './ListingsGrid';
import { fetchListings } from 'actions/listingActions';
import useScriptRef from 'hooks/useScriptRef';

const ListingsListView = () => {
    const scripted = useScriptRef();
    const [listings, setListings] = useState([]);

    const getListings = useCallback(async () => {
        try {
            const response = await fetchListings();
            if (scripted.current) {
                setListings(response);
            }
        } catch (error) {
            console.log(error);
        }
    }, [scripted]);

    useEffect(() => {
        getListings();
    }, []);

    console.log(listings);

    return (
        <Box sx={{ p: 2 }}>
            <Grid container>
                <ListingsGrid listings={listings} />
            </Grid>
        </Box>
    );
};

export default ListingsListView;
