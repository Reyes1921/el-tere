import React from 'react';

// material-ui
import { Grid, TextField } from '@material-ui/core';

// third-party
import MaskedInput from 'react-text-mask';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// assets
import LinkIcon from '@material-ui/icons/Link';

// ===========================|| PLUGIN - MASK INPUT ||=========================== //

const MaskPage = () => (
    <MainCard
        title="Mask"
        secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://www.npmjs.com/package/react-text-mask" />}
    >
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6}>
                <SubCard title="Date">
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item xs={12}>
                            <MaskedInput
                                mask={[/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                className="form-control"
                                label="Insert Date 1"
                                guide={false}
                                id="mask-date1"
                                onBlur={() => {}}
                                onChange={() => {}}
                                render={(ref, props) => <TextField fullWidth inputRef={ref} {...props} defaultValue="" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MaskedInput
                                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                className="form-control"
                                label="Insert Date 1"
                                guide={false}
                                id="mask-date2"
                                onBlur={() => {}}
                                onChange={() => {}}
                                render={(ref, props) => <TextField fullWidth inputRef={ref} {...props} defaultValue="" />}
                            />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Time">
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item xs={12}>
                            <MaskedInput
                                mask={[/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/]}
                                className="form-control"
                                label="Hour"
                                guide={false}
                                id="mask-hour1"
                                onBlur={() => {}}
                                onChange={() => {}}
                                render={(ref, props) => <TextField fullWidth inputRef={ref} {...props} defaultValue="" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MaskedInput
                                mask={[
                                    /[0-9]/,
                                    /[0-9]/,
                                    '/',
                                    /[0-9]/,
                                    /[0-9]/,
                                    '/',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    ' ',
                                    /[0-9]/,
                                    /[0-9]/,
                                    ':',
                                    /[0-9]/,
                                    /[0-9]/,
                                    ':',
                                    /[0-9]/,
                                    /[0-9]/
                                ]}
                                className="form-control"
                                label="Date & Hour"
                                guide={false}
                                id="mask-date-hour1"
                                onBlur={() => {}}
                                onChange={() => {}}
                                render={(ref, props) => <TextField fullWidth inputRef={ref} {...props} defaultValue="" />}
                            />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Phone no.">
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item xs={12}>
                            <MaskedInput
                                mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/]}
                                className="form-control"
                                label="Mobile No."
                                guide={false}
                                id="mask-mobile-no1"
                                onBlur={() => {}}
                                onChange={() => {}}
                                render={(ref, props) => <TextField fullWidth inputRef={ref} {...props} defaultValue="" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MaskedInput
                                mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                className="form-control"
                                label="Telephone"
                                guide={false}
                                id="mask-telephone1"
                                onBlur={() => {}}
                                onChange={() => {}}
                                render={(ref, props) => <TextField fullWidth inputRef={ref} {...props} defaultValue="" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MaskedInput
                                mask={[
                                    '(',
                                    /[0-9]/,
                                    /[0-9]/,
                                    ')',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    '-',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/
                                ]}
                                className="form-control"
                                label="Tel. with Code Area"
                                guide={false}
                                id="mask-telephone-area-code"
                                onBlur={() => {}}
                                onChange={() => {}}
                                render={(ref, props) => <TextField fullWidth inputRef={ref} {...props} defaultValue="" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MaskedInput
                                mask={[
                                    '(',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    ')',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    '-',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/
                                ]}
                                className="form-control"
                                label="US Telephone"
                                guide={false}
                                id="mask-telephone-us"
                                onBlur={() => {}}
                                onChange={() => {}}
                                render={(ref, props) => <TextField fullWidth inputRef={ref} {...props} defaultValue="" />}
                            />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Network">
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item xs={12}>
                            <MaskedInput
                                mask={[
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    '.',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    '.',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    '.',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/
                                ]}
                                className="form-control"
                                label="IP Address"
                                guide={false}
                                id="mask-ip-address"
                                onBlur={() => {}}
                                onChange={() => {}}
                                render={(ref, props) => <TextField fullWidth inputRef={ref} {...props} defaultValue="" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MaskedInput
                                mask={[
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    '.',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    '.',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    '.',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/
                                ]}
                                className="form-control"
                                label="IPV4"
                                guide={false}
                                id="mask-ipv4"
                                onBlur={() => {}}
                                onChange={() => {}}
                                render={(ref, props) => <TextField fullWidth inputRef={ref} {...props} defaultValue="" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MaskedInput
                                mask={[
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    ':',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    ':',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    ':',
                                    /[0-9]/,
                                    ':',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    ':',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    ':',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    ':',
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/,
                                    /[0-9]/
                                ]}
                                className="form-control"
                                label="IPV6"
                                guide={false}
                                id="mask-ipv6"
                                onBlur={() => {}}
                                onChange={() => {}}
                                render={(ref, props) => <TextField fullWidth inputRef={ref} {...props} defaultValue="" />}
                            />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default MaskPage;
