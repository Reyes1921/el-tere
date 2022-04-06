import React, { useState } from 'react';
import Helmet from 'react-helmet';
import ListingsListView from './ListView';

const Listings = () => {
    const [listings, setListings] = useState([]);

    return (
        <div>
            <Helmet>
                <title>PCH Dash - Listings </title>
            </Helmet>
            <h1>Listings Page</h1>
            <div>
                <ListingsListView />
            </div>
        </div>
    );
};

export default Listings;
