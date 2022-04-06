import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import {
    Box,
    Button,
    CardContent,
    Chip,
    Divider,
    Grid,
    LinearProgress,
    List,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItemButton';

// project imports
import Avatar from 'ui-component/extended/Avatar';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

// assets
import { IconEdit } from '@tabler/icons';
import PhonelinkRingTwoToneIcon from '@material-ui/icons/PhonelinkRingTwoTone';
import PinDropTwoToneIcon from '@material-ui/icons/PinDropTwoTone';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';

import Avatar3 from 'assets/images/users/avatar-3.png';

// progress
function LinearProgressWithLabel({ value, ...others }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    mr: 1
                }}
            >
                <LinearProgress value={value} {...others} />
            </Box>
            <Box
                sx={{
                    minWidth: 35
                }}
            >
                <Typography variant="body2" color="textSecondary">{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number
};

// personal details table
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Nombre completo', ':', 'Suzan perez'),
    createData('Dirección', ':', 'Patarata norte'),
    createData('Teléfonos', ':', '+0 123456789 , +0 123456789'),
    createData('Correo', ':', 'suzan@example.com'),
    createData('Sexo', ':', 'Femenino'),
    createData('Fecha de nacimiento', ':', '28-02-1998'),
];

// ===========================|| PROFILE 1 - PROFILE ||=========================== //

const Profile = () => (
    <Grid container spacing={gridSpacing}>
        <Grid item lg={4} xs={12}>
            <SubCard
                title={
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Avatar alt="User 1" src={Avatar3} />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography align="left" variant="subtitle1">
                                Suzan
                            </Typography>
                        </Grid>
                    </Grid>
                }
            >
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton>
                        <ListItemIcon>
                            <MailTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="subtitle1">Correo</Typography>} />
                        <ListItemSecondaryAction>
                            <Typography variant="subtitle2" align="right">
                                demo@sample.com
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <PhonelinkRingTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="subtitle1">Teléfono</Typography>} />
                        <ListItemSecondaryAction>
                            <Typography variant="subtitle2" align="right">
                                (+99) 9999 999 999
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <PinDropTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="subtitle1">Dirección</Typography>} />
                        <ListItemSecondaryAction>
                            <Typography variant="subtitle2" align="right">
                                Melbourne
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItemButton>
                </List>
            </SubCard>
        </Grid>
        <Grid item lg={8} xs={12}>
            <Grid container direction="column" spacing={gridSpacing}>
                <Grid item xs={12}>
                    <SubCard>
                        <Grid container direction="column" spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Detalles personales</Typography>
                            </Grid>
                            <Divider sx={{ pt: 1 }} />
                            <Grid item xs={12}>
                                <TableContainer
                                    sx={{
                                        boxSizing: 'border-box',
                                        display: 'block',
                                        maxWidth: 'calc(100vw - 148px)'
                                    }}
                                >
                                    <Table
                                        sx={{
                                            '& td': {
                                                borderBottom: 'none',
                                                whiteSpace: 'nowrap'
                                            }
                                        }}
                                        size="small"
                                    >
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell variant="head">{row.name}</TableCell>
                                                    <TableCell>{row.calories}</TableCell>
                                                    <TableCell>{row.fat}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title="Education">
                        <Grid container direction="column" spacing={1}>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="subtitle1">2014-2017</Typography>
                                        <Typography variant="subtitle2">Master Degree</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Typography variant="subtitle1">Master Degree in Computer Application</Typography>
                                        <Typography variant="subtitle2">University of Oxford, England</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                            </Box>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="subtitle1">2011-2013</Typography>
                                        <Typography variant="subtitle2">Bachelor</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Typography variant="subtitle1">Bachelor Degree in Computer Engineering</Typography>
                                        <Typography variant="subtitle2">Imperial College London</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                            </Box>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="subtitle1">2009-2011</Typography>
                                        <Typography variant="subtitle2">School</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Typography variant="subtitle1">Higher Secondary Education</Typography>
                                        <Typography variant="subtitle2">School of London, England</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title="Employment">
                        <Grid container direction="column" spacing={2}>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="subtitle1">Current</Typography>
                                        <Typography variant="subtitle2">Senior</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Typography variant="subtitle1">Senior UI/UX designer</Typography>
                                        <Typography variant="subtitle2">
                                            Perform task related to project manager with the 100+ team under my observation. Team management
                                            is key role in this company.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                            </Box>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="subtitle1">2017-2019</Typography>
                                        <Typography variant="subtitle2">Junior</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Typography variant="subtitle1">Trainee cum Project Manager</Typography>
                                        <Typography variant="subtitle2">Microsoft, TX, USA</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title="Skills">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body2">Junior</Typography>
                                <LinearProgressWithLabel color="primary" variant="determinate" value={70} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body2">UX Researcher</Typography>
                                <LinearProgressWithLabel color="primary" variant="determinate" value={80} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body2">Wordpress</Typography>
                                <LinearProgressWithLabel color="secondary" variant="determinate" value={25} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body2">Graphic Designer</Typography>
                                <LinearProgressWithLabel color="primary" variant="determinate" value={80} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body2">HTML</Typography>
                                <LinearProgressWithLabel color="secondary" variant="determinate" value={45} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body2">PHP</Typography>
                                <LinearProgressWithLabel color="primary" variant="determinate" value={65} />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default Profile;
