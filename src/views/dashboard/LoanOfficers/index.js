import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import Helmet from 'react-helmet';
import LoanOfficerListView from './ListView';

const LoanOfficers = () => {
    const [team, setTeam] = useState([]);

    return (
        <Box>
            <Helmet>
                <title>PCH Dash - Team</title>
            </Helmet>
            <h1>Team Page</h1>
            <Container>
                <LoanOfficerListView />
            </Container>
        </Box>
    );
};

export default LoanOfficers;
