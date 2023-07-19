import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AdminRoutes from './AdminRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import FooterLinks from './FooterLinks';

// ==============================|| ROUTING RENDER ||============================== //

export default function () {
    return useRoutes([MainRoutes,AdminRoutes,AuthenticationRoutes,FooterLinks]);
}
