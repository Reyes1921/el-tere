import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconUser, IconSettings, IconBell, IconCreditCard } from '@tabler/icons';

// constant
const icons = { IconUser, IconSettings, IconBell, IconCreditCard };

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const administration = {
    id: 'admin & settings',
    title: <FormattedMessage id="admin & settings" />,
    type: 'group',
    children: [
        {
            id: 'account',
            title: <FormattedMessage id="Account" />,
            type: 'collapse',
            url: '/account/profile',
            icon: icons.IconUser,
            children: [
                {
                    id: 'billing',
                    title: <FormattedMessage id="Billing" />,
                    type: 'item',
                    url: '/account/billing',
                    icon: icons.IconCreditCard,
                    breadcrumbs: false
                },
                {
                    id: 'notifications',
                    title: <FormattedMessage id="Notifications" />,
                    type: 'item',
                    url: '/account/notifications',
                    icon: icons.IconBell,
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'settings',
            title: <FormattedMessage id="Settings" />,
            type: 'item',
            url: '/account/settings',
            icon: icons.IconSettings,
            breadcrumbs: false
        }
    ]
};

export default administration;
