const nodeURL = process.env.REACT_APP_STRAPI_URL || null;

const headers = () => ({
    'Content-Type': 'application/json'
});

// *********** FETCH ALL CLIENTS *********** //
export const fetchClients = async () => {
    const opts = {
        method: 'GET',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/clients`, opts).then((data) => data.json());

    return response;
};

// *********** FETCH A CLIENT (BY ID) *********** //
export const fetchClient = async (id) => {
    const opts = {
        method: 'GET',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/clients/${id}`, opts).then((data) => data.json());

    return response;
};

// *********** CREATE CLIENT *********** //
export const createClient = async (details) => {
    const opts = {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(details)
    };

    const response = await fetch(`${nodeURL}/clients`, opts).then((data) => data.json());

    return response;
};

// *********** UPDATE CLIENT *********** //
export const updateClient = async (id, details) => {
    const opts = {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify(details)
    };

    const response = await fetch(`${nodeURL}/clients/${id}`, opts).then((data) => data.json());

    return response;
};

// *********** DELETE CLIENT *********** //
export const deleteClient = async (id) => {
    const opts = {
        method: 'DELETE',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/clients/${id}`, opts).then((data) => data.json());

    return response;
};
