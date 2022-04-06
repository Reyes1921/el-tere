import React, { useState } from 'react';
import Helmet from 'react-helmet';

const Chat = () => {
    const [team, setTeam] = useState([]);

    return (
        <div>
            <Helmet>
                <title>PCH Dash - Chat</title>
            </Helmet>
            <h1>Chat Page</h1>
        </div>
    );
};

export default Chat;
