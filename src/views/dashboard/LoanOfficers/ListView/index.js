import React, { useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

const LoanOfficerListView = () => {
    const [loanOfficers, setLoanOfficers] = useState([]);
    return (
        <Grid container>
            <div>Cards of Loan Officer with Image</div>
        </Grid>
    );
};

export default LoanOfficerListView;
