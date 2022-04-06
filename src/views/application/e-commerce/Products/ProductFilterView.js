import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import { Button, ButtonBase, CardContent, Chip, Grid, Tooltip, Typography, useMediaQuery } from '@material-ui/core';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import ColorOptions from '../ColorOptions';
import { gridSpacing } from 'store/constant';

// assets
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

function getColor(color) {
    return ColorOptions.filter((item) => item.value === color);
}

// ===========================|| PRODUCT GRID - FILTER VIEW ||=========================== //

const ProductFilterView = ({ filter, filterIsEqual, handelFilter, initialState }) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {!filterIsEqual(initialState, filter) && (
                <Grid container spacing={gridSpacing} sx={{ pb: gridSpacing }} alignItems="center">
                    {!(initialState.search === filter.search) && (
                        <Grid item>
                            <SubCard content={false}>
                                <CardContent sx={{ pb: '12px !important', p: 1.5 }}>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item>
                                            <Typography variant="subtitle1">Rating</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Chip
                                                size={matchDownMD ? 'small' : ''}
                                                label={filter.search}
                                                color="secondary"
                                                onDelete={() => handelFilter('search', '')}
                                                sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </SubCard>
                        </Grid>
                    )}
                    {!(initialState.sort === filter.sort) && (
                        <Grid item>
                            <SubCard content={false}>
                                <CardContent sx={{ pb: '12px !important', p: 1.5 }}>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item>
                                            <Typography variant="subtitle1">Sort</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Chip
                                                size={matchDownMD ? 'small' : ''}
                                                label={filter.sort}
                                                color="secondary"
                                                onDelete={() => handelFilter('sort', initialState.sort)}
                                                sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </SubCard>
                        </Grid>
                    )}
                    {!(JSON.stringify(initialState.gender) === JSON.stringify(filter.gender)) && (
                        <Grid item>
                            <SubCard content={false}>
                                <CardContent sx={{ pb: '12px !important', p: 1.5 }}>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item>
                                            <Typography variant="subtitle1">Gender</Typography>
                                        </Grid>

                                        {filter.gender.map((item, index) => {
                                            let color = 'secondary';
                                            if (item === 'male') color = 'primary';
                                            if (item === 'kids') color = 'error';
                                            return (
                                                <Grid item key={index}>
                                                    <Chip
                                                        size={matchDownMD ? 'small' : ''}
                                                        label={item}
                                                        onDelete={() => handelFilter('gender', item)}
                                                        color={color}
                                                        sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </CardContent>
                            </SubCard>
                        </Grid>
                    )}
                    {!(JSON.stringify(initialState.categories) === JSON.stringify(filter.categories)) && filter.categories.length > 0 && (
                        <Grid item>
                            <SubCard content={false}>
                                <CardContent sx={{ pb: '12px !important', p: 1.5 }}>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item>
                                            <Typography variant="subtitle1">Categories</Typography>
                                        </Grid>
                                        {filter.categories.map((item, index) => (
                                            <Grid item key={index}>
                                                <Chip
                                                    size={matchDownMD ? 'small' : ''}
                                                    label={item}
                                                    onDelete={() => handelFilter('categories', item)}
                                                    color="secondary"
                                                    sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </CardContent>
                            </SubCard>
                        </Grid>
                    )}
                    {!(JSON.stringify(initialState.colors) === JSON.stringify(filter.colors)) && (
                        <Grid item>
                            <SubCard content={false}>
                                <CardContent sx={{ pb: '12px !important', p: 1.5 }}>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item>
                                            <Typography variant="subtitle1">Colors</Typography>
                                        </Grid>
                                        {filter.colors.map((item, index) => {
                                            const colorsData = getColor(item);
                                            return (
                                                <Grid item key={index}>
                                                    <Tooltip title={colorsData[0].label}>
                                                        <ButtonBase
                                                            sx={{ borderRadius: '50%' }}
                                                            onClick={() => handelFilter('colors', item)}
                                                        >
                                                            <Avatar
                                                                color="inherit"
                                                                size="badge"
                                                                sx={{
                                                                    bgcolor: colorsData[0].bg,
                                                                    color: theme.palette.mode === 'light' ? 'grey.50' : 'grey.800'
                                                                }}
                                                            >
                                                                <CheckIcon
                                                                    color={theme.palette.mode === 'light' ? 'grey.50' : 'grey.800'}
                                                                    fontSize="inherit"
                                                                />
                                                            </Avatar>
                                                        </ButtonBase>
                                                    </Tooltip>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </CardContent>
                            </SubCard>
                        </Grid>
                    )}
                    {!(initialState.price === filter.price) && (
                        <Grid item>
                            <SubCard content={false}>
                                <CardContent sx={{ pb: '12px !important', p: 1.5 }}>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item>
                                            <Typography variant="subtitle1">Price</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Chip
                                                size={matchDownMD ? 'small' : ''}
                                                label={filter.price}
                                                color="primary"
                                                sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </SubCard>
                        </Grid>
                    )}
                    {!(initialState.rating === filter.rating) && (
                        <Grid item>
                            <SubCard content={false}>
                                <CardContent sx={{ pb: '12px !important', p: 1.5 }}>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item>
                                            <Typography variant="subtitle1">Rating</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Chip
                                                size={matchDownMD ? 'small' : ''}
                                                label={filter.rating}
                                                color="warning"
                                                onDelete={() => handelFilter('rating', 0)}
                                                sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </SubCard>
                        </Grid>
                    )}
                    <Grid item>
                        <Button variant="outlined" startIcon={<CloseIcon />} color="error" onClick={() => handelFilter('reset', '')}>
                            Clear All
                        </Button>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

ProductFilterView.propTypes = {
    filter: PropTypes.object,
    filterIsEqual: PropTypes.func,
    initialState: PropTypes.object,
    handelFilter: PropTypes.func
};

export default ProductFilterView;
