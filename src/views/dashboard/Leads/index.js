import React, { useState } from 'react';
import Helmet from 'react-helmet';

const Leads = () => {
    const [leads, setLeads] = useState([]);
    return (
        <div>
            <Helmet>
                <title>PCH Dash - Leads</title>
            </Helmet>
            <h1>Leads Page</h1>
        </div>
    );
};

export default Leads;
