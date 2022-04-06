import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconHome, IconFiles, IconFileSearch } from '@tabler/icons';

// constant
const icons = { IconHome, IconFiles, IconFileSearch };

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const sales = {
    id: 'sales',
    title: <FormattedMessage id="sales" />,
    type: 'group',
    children: [
        {
            id: 'leads',
            title: <FormattedMessage id="Leads" />,
            type: 'item',
            url: '/leads',
            icon: icons.IconHome,
            breadcrumbs: false
        },
        {
            id: 'clients',
            title: <FormattedMessage id="Clients" />,
            type: 'item',
            url: '/clients',
            icon: icons.IconFiles,
            breadcrumbs: false
        }
    ]
};

export default sales;
