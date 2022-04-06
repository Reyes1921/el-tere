const nodeURL = process.env.REACT_APP_STRAPI_URL || null;

const headers = () => ({
    'Content-Type': 'application/json'
});

// *********** FETCH ALL LISTINGS *********** //
export const fetchListings = async () => {
    const opts = {
        method: 'GET',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/listings`, opts).then((data) => data.json());

    return response;
};

// *********** FETCH A LISTING (BY ID) *********** //
export const fetchListing = async (id) => {
    const opts = {
        method: 'GET',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/listings/${id}`, opts).then((data) => data.json());

    return response;
};
