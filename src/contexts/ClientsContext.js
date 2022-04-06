import React, { createContent, useEffect, useReducer } from 'react';
import { fetchClient, createClient, updateClient, deleteClient } from '../actions/clientActions';
import { useLocation } from 'react-router-dom';
import Loadable from 'ui-component/Loadable';

const initialClientState = {
    isInitialised: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INITIALISE': {
            const { data } = action.payload;

            return {
                ...state,
                isInitialised: true,
                client: data
            };
        }

        case 'UPDATE_CLIENT': {
            const { new_client } = action.payload;

            return {
                ...state,
                client: new_client
            };
        }

        case 'REMOVE_CLIENT': {
            const { removed_client } = action.payload;

            return {
                ...state,
                client: {
                    ...state.client,
                    clients: [...state.clients.filter((client) => client.id !== removed_client.id)]
                }
            };
        }

        default: {
            return { ...state };
        }
    }
};

const ClientsContext = createContext({
    ...initialClientState
});

export const ClientProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialClientState);
    const location = useLocation();
    const clientId = location.pathname.split('/').slice(-1).pop();

    const editClient = async (id, values) => {
        try {
            const response = await updateClient(id, values)
                .then((response) => {
                    console.log(response);
                    if (response.id == id) {
                        return response;
                    } else if (response.status === 400) {
                        throw new Error('Error updating client');
                    } else {
                        throw new Error('Internal server error');
                    }
                })
                .catch((err) => console.log(err));

            console.log(response);

            dispatch({
                type: 'UPDATE_CLIENT',
                payload: {
                    new_client: response
                }
            });

            return response;
        } catch (err) {
            console.log(err);
        }
    };

    const removeClient = async (values) => {
        try {
            dispatch({
                type: 'REMOVE_CLIENT',
                payload: {
                    removed_client: values
                }
            });

            const response = await deleteClient(values.id)
                .then((response) => {
                    if (response.id) {
                        return response;
                    } else if (response.status === 400) {
                        throw new Error('Error deleting client');
                    } else {
                        throw new Error('Internal server error');
                    }
                })
                .catch((err) => console.log(err));

            console.log(response);

            return response;
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const initialise = async () => {
            try {
                const repsonse = await fetchClient(clientId)
                    .then((response) => {
                        if (response.id == clientId) {
                            return response;
                        } else if (response.status === 400) {
                            throw new Error('Error loading client');
                        } else {
                            throw new Error('Internal server error');
                        }
                    })
                    .catch((err) => console.log(err));

                if (!response) return { status: 400, message: 'Error loading client' };

                console.log(response);
                dispatch({
                    type: 'INITIALISE',
                    payload: {
                        data: response
                    }
                });
            } catch (err) {
                console.log(err);
            }
        };

        initialise();
    }, []);

    if (!state.isInitialised) {
        return <Loadable />;
    }

    return (
        <ClientsContext.Provider
            value={{
                ...state,
                editClient,
                removeClient
            }}
        >
            {children}
        </ClientsContext.Provider>
    );
};

export const ClientConsumer = ClientsContext.ClientConsumer;
export default ClientsContext;
