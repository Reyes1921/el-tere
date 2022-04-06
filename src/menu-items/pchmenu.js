import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconReportAnalytics, IconHome, IconUsers } from '@tabler/icons';
import { FaFunnelDollar, FaHome, FaChartLine } from 'react-icons/fa';
import { MdDashboard, MdGroup, MdErrorOutline } from 'react-icons/md';
import { RiFolderChartFill, RiTeamFill } from 'react-icons/ri';
import { GiShop } from 'react-icons/gi';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconReportAnalytics,
    IconHome,
    IconUsers,
    FaFunnelDollar,
    MdDashboard,
    FaChartLine,
    FaHome,
    MdGroup,
    RiFolderChartFill,
    MdErrorOutline,
    GiShop
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const dashboard = {
    id: 'dashboard',
    title: <FormattedMessage id="dashboard" />,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="Dashboard" />,
            type: 'item',
            url: '/dashboard',
            icon: icons.MdDashboard,
            breadcrumbs: false
        },
        {
            id: 'analytics',
            title: <FormattedMessage id="Reportes" />,
            type: 'item',
            url: '/dashboard/analytics',
            icon: icons.FaChartLine,
            breadcrumbs: false
        },
        {
            id: 'clients',
            title: <FormattedMessage id="Vendedores" />,
            type: 'item',
            url: '/dashboard/clients',
            icon: icons.MdGroup,
            breadcrumbs: false
        },
        {
            id: 'clients',
            title: <FormattedMessage id="Incidencias" />,
            type: 'item',
            url: '/dashboard/clients',
            icon: icons.MdErrorOutline,
            breadcrumbs: false
        },
        {
            id: 'clients',
            title: <FormattedMessage id="Locales" />,
            type: 'item',
            url: '/dashboard/clients',
            icon: icons.GiShop,
            breadcrumbs: false
        },
    ]
};

export default dashboard;
