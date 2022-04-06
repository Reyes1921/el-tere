import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { fetchClients, deleteClient } from '../../../../actions/clientActions';
import useScriptRef from 'hooks/useScriptRef';
import ClientList from './ClientList';
import useAuth from 'hooks/useAuth';
import toast from 'react-hot-toast';

const ClientListView = () => {
    const scripted = useScriptRef();
    const user = useAuth();
    const [clients, setClients] = useState([]);

    const getClients = useCallback(async () => {
        try {
            const response = await fetchClients();
            if (scripted.current) {
                setClients(response);
            }
        } catch (error) {
            console.log(error);
        }
    }, [scripted]);

    useEffect(() => {
        getClients();
    }, [clients]);

    // USE THIS BELOW ONCE AUTHENTICATION IS WORKING
    // useEffect(() => {
    //     if (user && user.clients) {
    //         getClients();
    //     }
    // }, [user, user.clients]);

    // console.log(clients);

    return (
        <>
            <Box>
                <ClientList clients={clients} />
            </Box>
        </>
    );
};

export default ClientListView;
