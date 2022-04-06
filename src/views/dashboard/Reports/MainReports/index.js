import React, { useState } from 'react';
import Helmet from 'react-helmet';

const MainReports = () => {
    const [reports, setReports] = useState([]);

    return (
        <div>
            <Helmet>
                <title>PCH Dash - Reports</title>
            </Helmet>
            <h1>Main Reports Page</h1>
        </div>
    );
};

export default MainReports;
