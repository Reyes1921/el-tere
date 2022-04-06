import React from 'react';
import PCHLogoFull from '../assets/images/PCH_logo.png';
import PCHLogoFullWhite from '../assets/images/PCH_white.png';

// material-ui
import { useTheme } from '@material-ui/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ===========================|| LOGO SVG ||=========================== //

const PCHLogo = () => {
    const theme = useTheme();

    return <img src={theme.palette.mode === 'light' ? PCHLogoFull : PCHLogoFullWhite} alt="PCH" width="220" />;
};

export default PCHLogo;
