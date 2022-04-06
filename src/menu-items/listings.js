import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconHome, IconFiles, IconFileSearch } from '@tabler/icons';

// constant
const icons = { IconHome, IconFiles, IconFileSearch };

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const listings = {
    id: 'listings',
    title: <FormattedMessage id="listings" />,
    type: 'group',
    children: [
        {
            id: 'property-listings',
            title: <FormattedMessage id="Listings" />,
            type: 'item',
            url: '/listings',
            icon: icons.IconHome,
            breadcrumbs: false
        }
    ]
};

export default listings;
