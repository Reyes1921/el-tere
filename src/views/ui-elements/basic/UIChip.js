import React from 'react';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import { Avatar, Chip, Grid } from '@material-ui/core';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// assets
import User1 from 'assets/images/users/avatar-4.png';

// ================================|| UI CHIP ||================================ //

const UIChip = () => {
    const theme = useTheme();

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <MainCard title="Chip" secondary={<SecondaryAction link="https://next.material-ui.com/components/chips/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                    <SubCard title="Basic">
                        <Grid container spacing={3}>
                            <Grid item>
                                <Chip label="Default" color="primary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Deletable" onDelete={handleDelete} color="primary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Disabled" disabled color="primary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Clickable" onClick={handleClick} onDelete={handleDelete} color="primary" />
                            </Grid>

                            <Grid item>
                                <Chip
                                    avatar={<Avatar>AK</Avatar>}
                                    label="Clickable deletable"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    color="primary"
                                />
                            </Grid>
                            <Grid item>
                                <Chip
                                    label="Clickable"
                                    avatar={<Avatar alt="Avatar 1" src={User1} />}
                                    onClick={handleClick}
                                    color="primary"
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12} md={6}>
                    <SubCard title="Outlined">
                        <Grid container spacing={3}>
                            <Grid item>
                                <Chip label="Default" variant="outlined" color="primary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Deletable" onDelete={handleDelete} variant="outlined" color="primary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Disabled" disabled variant="outlined" color="primary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Clickable" variant="outlined" onClick={handleClick} onDelete={handleDelete} color="primary" />
                            </Grid>

                            <Grid item>
                                <Chip
                                    avatar={<Avatar>AK</Avatar>}
                                    label="Clickable deletable"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    color="primary"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <Chip
                                    label="Clickable"
                                    avatar={<Avatar alt="Avatar 1" src={User1} />}
                                    onClick={handleClick}
                                    variant="outlined"
                                    color="primary"
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12}>
                    <SubCard title="Outlined Color">
                        <Grid container spacing={3}>
                            <Grid item>
                                <Chip label="Default" variant="outlined" color="primary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Secondary" variant="outlined" color="secondary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Success" onDelete={handleDelete} variant="outlined" color="success" />
                            </Grid>
                            <Grid item>
                                <Chip label="Error" onDelete={handleDelete} variant="outlined" color="error" />
                            </Grid>
                            <Grid item>
                                <Chip label="Secondary" onDelete={handleDelete} variant="outlined" color="secondary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Disabled" disabled variant="outlined" color="info" />
                            </Grid>
                            <Grid item>
                                <Chip label="Clickable" variant="outlined" onClick={handleClick} onDelete={handleDelete} />
                            </Grid>

                            <Grid item>
                                <Chip
                                    avatar={
                                        <Avatar
                                            sx={{
                                                bgcolor: theme.palette.warning.dark,
                                                color: `${theme.palette.background.paper} !important`
                                            }}
                                        >
                                            AK
                                        </Avatar>
                                    }
                                    label="Clickable deletable"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    variant="outlined"
                                    color="warning"
                                />
                            </Grid>
                            <Grid item>
                                <Chip
                                    label="Clickable"
                                    avatar={<Avatar alt="Avatar 1" src={User1} />}
                                    onClick={handleClick}
                                    variant="outlined"
                                    color="primary"
                                />
                            </Grid>
                            <Grid item>
                                <Chip
                                    label="Clickable"
                                    avatar={<Avatar alt="Avatar 1" src={User1} />}
                                    onClick={handleClick}
                                    variant="outlined"
                                    color="secondary"
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12}>
                    <SubCard title="Filled Color">
                        <Grid container spacing={3}>
                            <Grid item>
                                <Chip label="Default" color="primary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Secondary" color="secondary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Success" onDelete={handleDelete} color="success" />
                            </Grid>
                            <Grid item>
                                <Chip label="Error" onDelete={handleDelete} color="error" />
                            </Grid>
                            <Grid item>
                                <Chip label="Secondary" onDelete={handleDelete} color="secondary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Disabled" disabled color="primary" />
                            </Grid>
                            <Grid item>
                                <Chip label="Clickable" onClick={handleClick} onDelete={handleDelete} />
                            </Grid>

                            <Grid item>
                                <Chip
                                    avatar={
                                        <Avatar
                                            sx={{
                                                bgcolor: theme.palette.warning.dark,
                                                color: `${theme.palette.background.paper} !important`
                                            }}
                                        >
                                            AK
                                        </Avatar>
                                    }
                                    label="Clickable delete"
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    color="warning"
                                />
                            </Grid>
                            <Grid item>
                                <Chip
                                    label="Clickable"
                                    avatar={<Avatar alt="Avatar 1" src={User1} />}
                                    onClick={handleClick}
                                    color="primary"
                                />
                            </Grid>
                            <Grid item>
                                <Chip
                                    label="Clickable"
                                    avatar={<Avatar alt="Avatar 1" src={User1} />}
                                    onClick={handleClick}
                                    color="secondary"
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UIChip;
