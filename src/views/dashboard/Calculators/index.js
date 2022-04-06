import React, { useState } from 'react';
import Helmet from 'react-helmet';

const Calculators = () => {
    const [calcs, setCals] = useState([]);

    return (
        <div>
            <Helmet>
                {' '}
                <title>PCH Dash | Calculators</title>{' '}
            </Helmet>
            <h1>Calculators Page</h1>
        </div>
    );
};

export default Calculators;
