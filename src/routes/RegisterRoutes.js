import React, { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';

// login routing
const AuthRegister = Loadable(lazy(() => import('views/pages/authentication/register')));

// ===========================|| AUTH ROUTING ||=========================== //

const RegisterRoutes = {
    path: 'register',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: (
                <NavMotion>
                    <GuestGuard>
                        <AuthRegister />
                    </GuestGuard>
                </NavMotion>
            )
        }
    ]
};

export default RegisterRoutes;