import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import { Grid, ToggleButton } from '@material-ui/core';

// assets
import CheckIcon from '@material-ui/icons/CheckTwoTone';

// ============================|| UI TOGGLE BUTTON - STANDALONE ||============================ //

export default function StandaloneToggleButton() {
    const theme = useTheme();
    const [selected, setSelected] = React.useState(false);

    return (
        <Grid container justifyContent="center">
            <ToggleButton
                value="check"
                onChange={() => {
                    setSelected(!selected);
                }}
                sx={{ color: theme.palette.success.dark, bgcolor: theme.palette.success.light }}
            >
                <CheckIcon />
            </ToggleButton>
        </Grid>
    );
}
