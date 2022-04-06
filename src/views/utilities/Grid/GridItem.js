// material-ui
import { styled } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

// ===============================|| GRID - ITEMS ||=============================== //

const GridItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.secondary.dark,
    background: theme.palette.secondary[200]
}));

export default GridItem;
