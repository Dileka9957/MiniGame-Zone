import { lazy } from 'react';

// project imports
import AdminLayout from 'layout/AdminLayout';
import Loadable from 'ui-component/Loadable';

const AdminDashboard = Loadable(lazy(() => import('views/admin/admin-dashboard')));
const UserDetails = Loadable(lazy(() => import('views/admin/admin-dashboard/users-details/UserDetails')));

// tables routing
const GameUpload = Loadable(lazy(() => import('views/pages/gameUpload')));
const UserTable = Loadable(lazy(() => import('views/pages/userTable')));
const CategoryTable = Loadable(lazy(() => import('views/pages/categoryTable')));
const ContactUsRecords = Loadable(lazy(() => import('views/pages/contactUsRecords')));

// ==============================|| ADMIN ROUTING ||============================== //

const AdminRoutes = 
{
    path: '/admin-dashboard',
    element: <AdminLayout/>,
    children: [

        {
            path: '/admin-dashboard',
            element: <AdminDashboard />
        },
        {
            path: '/admin-dashboard/admin',
            element: <UserDetails />
        },
        {
            path: '/admin-dashboard/GameUpload',
            element: <GameUpload />
        },
        {
            path: '/admin-dashboard/UserTable',
            element: <UserTable />
        },
        {
            path: '/admin-dashboard/CategoryTable',
            element: <CategoryTable />
        },
        {
            path: '/admin-dashboard/ContactUsRecords',
            element: <ContactUsRecords />
        },
    ]
}

export default AdminRoutes;