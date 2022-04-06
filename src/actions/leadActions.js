const nodeURL = process.env.REACT_APP_STRAPI_URL || null;

const headers = () => ({
    'Content-Type': 'application/json'
});

// *********** FETCH ALL LEADS *********** //
export const fetchLeads = async () => {
    const opts = {
        method: 'GET',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/leads`, opts).then((data) => data.json());

    return response;
};

// *********** FETCH A LEAD (BY ID) *********** //
export const fetchLead = async (id) => {
    const opts = {
        method: 'GET',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/leads/${id}`, opts).then((data) => data.json());

    return response;
};

// *********** CREATE LEAD *********** //
export const createLead = async (details) => {
    const opts = {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(details)
    };

    const response = await fetch(`${nodeURL}/leads`, opts).then((data) => data.json());

    return response;
};

// *********** UPDATE LEAD *********** //
export const updateLead = async (id, details) => {
    const opts = {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify(details)
    };

    const response = await fetch(`${nodeURL}/leads/${id}`, opts).then((data) => data.json());

    return response;
};

// *********** DELETE LEAD *********** //
export const deleteLead = async (id) => {
    const opts = {
        method: 'DELETE',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/leads/${id}`, opts).then((data) => data.json());

    return response;
};
