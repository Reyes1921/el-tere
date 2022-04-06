const nodeURL = process.env.REACT_APP_STRAPI_URL || null;
// const headers = {
// 	'Content-Type': 'application/json',
// 	Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
// };
const headers = () => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
});

// *********** CREATE USER *********** //
export const createUser = async (details) => {
    const opts = {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(details)
    };

    const response = await fetch(`${nodeURL}/users`, opts).then((data) => data.json());

    return response;
};

// *********** FETCH ALL USERS *********** //
export const fetchUsers = async () => {
    const opts = {
        method: 'GET',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/users/?_sort=name`, opts).then((data) => data.json());

    return response;
};

// *********** FETCH A USER (BY ID) *********** //
export const fetchUser = async (id) => {
    const opts = {
        method: 'GET',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/users/${id}`, opts).then((data) => data.json());

    return response;
};

// *********** UPDATE A USER (BY ID) *********** //
export const updateUser = async (id, details) => {
    const opts = {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify(details)
    };

    const response = await fetch(`${nodeURL}/users/${id}`, opts).then((data) => data.json());

    return response;
};

// *********** DELETE A USER (BY ID) *********** //
export const deleteUser = async (id) => {
    const opts = {
        method: 'DELETE',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/users/${id}`, opts).then((data) => data.json());

    return response;
};
