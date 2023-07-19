import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const Home = Loadable(lazy(() => import('views/home/home.screen')));
const Empty = Loadable(lazy(() => import('views/empty')));
const InnerPage = Loadable(lazy(() => import('views/Inner-page/InnerPage')));
const InnerPageAuthentication = Loadable(lazy(() => import('views/Inner-page/InnerPageAuthentication')));
const AccountProfile = Loadable(lazy(() => import('views/user-profile/index')));
const FourOhFour = Loadable(lazy(() => import('views/utilities/404')));
const DisplayAllGames = Loadable(lazy(() => import('views/home/displayAllGames')));
const DisplaySearchedGames = Loadable(lazy(() => import('views/home/displaySerchedGames')));
const DisplayCategoryGames = Loadable(lazy(() => import('views/home/displayCategoryGames')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

const BigCard = Loadable(lazy(() => import('ui-component/cards/BigCard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = 
{
    path: '/',
    element: <MainLayout/>,
    children: [
        {
            path: '/',
            element: <DisplayAllGames />
        },
        {
            path: 'game/search',
            element: <DisplaySearchedGames />
        },
        {
            path: '/game/:roomID',
            element: <InnerPageAuthentication/>
        },
        {
            path: '/game/categories',
            element: <DisplayCategoryGames/>
        },
        {
            path: '/user/account-profile',
            element: <AccountProfile />
        },
        {
            path: '/404',
            element: <FourOhFour />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <Home />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};
        

export default MainRoutes;
