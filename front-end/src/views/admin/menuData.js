import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

export const MenuData = [
    { MenuName: 'Categories', Link: '/admin-dashboard/categoryTable', id: 1, Icon: <AutoAwesomeMotionIcon /> },
    { MenuName: 'Games', Link: '/admin-dashboard/gameUpload', id: 2, Icon: <SportsEsportsIcon /> },
    { MenuName: 'Users', Link: '/admin-dashboard/userTable', id: 3, Icon: <PersonIcon /> },
    { MenuName: 'Messages', Link: '/admin-dashboard/ContactUsRecords', id: 4, Icon: <MessageIcon /> }
];