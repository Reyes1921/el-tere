import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import { Box, Stack, Typography } from '@material-ui/core';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

// assets
import visa from 'assets/images/e-commerce/visa.png';
import mastercard from 'assets/images/e-commerce/mastercard.png';
import CheckIcon from '@material-ui/icons/Check';

// ===========================|| CHECKOUT PAYMENT - CARD METHOD ||=========================== //

const PaymentCard = ({ type, cards, cardHandler }) => {
    const theme = useTheme();
    const card = type === 'visa' ? visa : mastercard;
    const visaColor = type === 'visa' ? 'secondary.dark' : 'primary.dark';
    const visaShadow = type === 'visa' ? theme.customShadows.secondary : theme.customShadows.primary;

    return (
        <SubCard
            content={false}
            sx={{
                bgcolor: type === 'visa' ? 'secondary.main' : 'primary.main',
                border: '2px solid',
                borderColor: cards === type ? 'grey.900' : visaColor,
                position: 'relative',
                overflow: 'hidden',
                maxWidth: '380px',
                boxShadow: cards === type ? visaShadow : 'none',
                '&:hover': {
                    boxShadow: cards === type ? visaShadow : 'none'
                },
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    bgcolor: type === 'visa' ? 'secondary.800' : 'primary.800',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    right: 12,
                    bottom: -30
                },
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    bgcolor: type === 'visa' ? 'secondary.dark' : 'primary.dark',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    right: -20,
                    bottom: 0
                }
            }}
        >
            <Stack
                spacing={1}
                sx={{
                    p: 2,
                    color: type === 'visa' ? 'secondary.light' : 'primary.light',
                    position: 'relative',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        bgcolor: type === 'visa' ? 'secondary.dark' : 'primary.dark',
                        width: '75px',
                        height: '75px',
                        borderRadius: '50%',
                        top: '-25px',
                        left: '-25px'
                    }
                }}
                onClick={() => cardHandler(type)}
            >
                <Stack
                    direction="row"
                    alignItems="flex-start"
                    sx={{ height: 40 }}
                    justifyContent={cards === type ? 'space-between' : 'flex-end'}
                >
                    {cards === type && <CheckIcon sx={{ zIndex: 1, mt: '-5px', ml: '-5px' }} />}
                    <Box
                        sx={{
                            backgroundImage: `url(${card})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'right',
                            width: 48,
                            height: type === 'visa' ? 16 : 36.5
                        }}
                    />
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h3" color="inherit">
                        ****
                    </Typography>
                    <Typography variant="h3" color="inherit">
                        ****
                    </Typography>
                    <Typography variant="h3" color="inherit">
                        ****
                    </Typography>
                    <Typography variant="h4" color="inherit">
                        2599
                    </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={gridSpacing}>
                    <Stack spacing={0.5}>
                        <Typography variant="caption" color="inherit" sx={{ opacity: 0.6 }}>
                            Expire Date
                        </Typography>
                        <Typography variant="body2" color="inherit" sx={{ opacity: 0.6 }}>
                            05/24
                        </Typography>
                    </Stack>
                    <Stack spacing={0.5}>
                        <Typography variant="caption" color="inherit" sx={{ opacity: 0.6 }}>
                            CVV
                        </Typography>
                        <Typography variant="body2" color="inherit" sx={{ opacity: 0.6 }}>
                            085
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </SubCard>
    );
};

PaymentCard.propTypes = {
    type: PropTypes.string,
    cards: PropTypes.string,
    cardHandler: PropTypes.func
};

export default PaymentCard;
