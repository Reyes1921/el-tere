import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Button, Grid, InputAdornment, OutlinedInput, Typography } from '@material-ui/core';

// project imports
import UserDetails from '../UserDetails';
import UserEdit from '../UserEdit';
import ContactList from 'ui-component/cards/ContactList';
import MainCard from 'ui-component/cards/MainCard';
import axios from 'utils/axios';
import { gridSpacing } from 'store/constant';

// assets
import { IconSearch } from '@tabler/icons';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import User1 from 'assets/images/users/avatar-1.png';

// style constant
const useStyles = makeStyles((theme) => ({
    smallDrawer: {
        width: '342px',
        [theme.breakpoints.down('md')]: {
            margin: '0 auto'
        }
    }
}));

// ===========================|| CONTACT LIST ||=========================== //

const CardListPage = () => {
    const classes = useStyles();

    // get all users details
    const [data, setData] = React.useState([]);
    const convertData = (userData) =>
        userData.reduce((a, curr) => {
            const firstLatter = curr.name[0].toUpperCase();

            if (Object.prototype.hasOwnProperty.call(a, firstLatter)) {
                a[firstLatter].push(curr);
            } else {
                a[firstLatter] = [curr];
            }
            return a;
        }, {});

    const getData = async () => {
        const response = await axios.get('/api/chat/users');
        setData(convertData(response.data.users));
        return response.data.users;
    };

    React.useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // edit selected user and modify users data
    const [user, setUser] = React.useState({});
    const modifyUser = async (u) => {
        await axios.post('/api/chat/users/modify', u);
        getData().then((d) => {
            if (user) {
                const idx = d.findIndex((item) => item.id === user.id);
                if (idx > -1) setUser(d[idx]);
            }
        });
    };

    // handle new user insert action
    const [userDetails, setUserDetails] = React.useState(false);
    const [userEdit, setUserEdit] = React.useState(false);
    const handleOnAdd = () => {
        setUser({
            name: '',
            company: '',
            role: '',
            work_email: '',
            personal_email: '',
            work_phone: '',
            personal_phone: '',
            location: 'USA',
            image: User1,
            status: 'I am online',
            lastMessage: '2h ago',
            birthdayText: ''
        });
        setUserDetails(false);
        setUserEdit(true);
    };

    return (
        <MainCard title="Contact List">
            <Grid container spacing={gridSpacing}>
                <Grid item xs zeroMinWidth sx={{ display: userDetails || userEdit ? { xs: 'none', md: 'block' } : 'block' }}>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                        <Grid item xs zeroMinWidth>
                            <OutlinedInput
                                id="input-search-card-style1"
                                placeholder="Search Contact"
                                fullWidth
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconSearch stroke={1.5} size="1rem" />
                                    </InputAdornment>
                                }
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<AddCircleOutlineOutlinedIcon />}
                                sx={{ p: '12px 22px' }}
                                onClick={handleOnAdd}
                            >
                                Add
                            </Button>
                        </Grid>

                        {Object.keys(data).map((key, index) => (
                            <React.Fragment key={index}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" color="primary" sx={{ fontSize: '16px' }}>
                                        {key.toUpperCase()}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container direction="row" spacing={0}>
                                        {data[key].map((userRow, i) => (
                                            <Grid item xs={12} key={i}>
                                                <ContactList
                                                    avatar={userRow.avatar}
                                                    name={userRow.name}
                                                    role={userRow.role}
                                                    email={userRow.work_email}
                                                    contact={userRow.phone}
                                                    location={userRow.location}
                                                    onActive={() => {
                                                        setUser(userRow);
                                                        setUserDetails(true);
                                                        setUserEdit(false);
                                                    }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
                {userDetails && (
                    <Grid item className={classes.smallDrawer}>
                        <UserDetails
                            user={user}
                            onEditClick={() => {
                                setUserDetails(false);
                                setUserEdit(true);
                            }}
                            onClose={() => {
                                setUserDetails(false);
                                setUserEdit(false);
                            }}
                        />
                    </Grid>
                )}

                {userEdit && (
                    <Grid item className={classes.smallDrawer}>
                        <UserEdit
                            user={user}
                            onSave={(u) => {
                                if (u.id) setUserDetails(true);
                                setUserEdit(false);
                                modifyUser(u);
                            }}
                            onCancel={(u) => {
                                if (u.id) setUserDetails(true);
                                setUserEdit(false);
                            }}
                        />
                    </Grid>
                )}
            </Grid>
        </MainCard>
    );
};

export default CardListPage;
