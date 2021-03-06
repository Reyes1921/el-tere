import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';

// project imports

import Header from './Header';

import Footer from '../landing/Footer';

import Customization from 'layout/Customization';
import AppBar from 'ui-component/extended/AppBar';

// style constant
const useStyles = makeStyles((theme) => ({
    header: {
        paddingTop: '30px',
        overflowX: 'hidden',
        overflowY: 'clip',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '0px'
        }
    },
    sectionWhite: {
        paddingTop: '160px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '60px'
        }
    }
}));

// =============================|| LANDING MAIN ||============================= //

const ListingsPage = () => {
    const classes = useStyles();

    return (
        <>
            <div id="home" className={classes.header}>
                <AppBar />
                <Header />
            </div>
            <div className={classes.sectionWhite}>This is the listings page</div>
            <Footer />
            <Customization />
        </>
    );
};

export default ListingsPage;
