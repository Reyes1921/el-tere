import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@material-ui/core';

// project imports
import config from 'config';
import PCHLogo from 'ui-component/PCHLogo';
import PCHlogowhite from 'assets/images/LOGOELTERE.png';

// ===========================|| MAIN LOGO ||=========================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <img src={PCHlogowhite} alt="PCH white logo" width="82" />
    </ButtonBase>
);

export default LogoSection;
