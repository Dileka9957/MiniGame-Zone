import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Hidden, Switch, Toolbar } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// project imports
import { isMobile } from 'react-device-detect';
import { useEffect,useState } from 'react';
import SwitchTheme from 'layout/Customization/switchTheme';
import LogoSection from 'layout/MainLayout/LogoSection';
import ProfileSection from 'layout/MainLayout/Header/ProfileSection/profileSection';


const AdminHeader = ({show, setShow,option1}) => {
    const theme = useTheme();
    const [mobile, setMobile] = useState();
    // console.log('isMobile', mobile);
    const [hidden, setHidden] = useState(false);
    
    useEffect(() => {
        isMobile ? setMobile(true) : setMobile(false);
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: theme.palette.background.paper,
                alignItems: 'center'
            }}
        >
            {isMobile === true && !hidden && <LogoSection />}
            {isMobile === false && <LogoSection />}
            <Toolbar />

            <Box sx={{ flexGrow: 1 }} />
            {isMobile === false && <SwitchTheme/>}

            
            {isMobile === false && (
                <Avatar
                    variant="rounded"
                    sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        mr: 1,
                        width: 60,
                        height: 34,
                        borderRadius: '15px',

                        transition: 'all .2s ease-in-out',
                        background: '#E4DFFF',
                        color: theme.palette.secondary.dark,
                        '&:hover': {
                            background: theme.palette.secondary.dark,
                            color: theme.palette.secondary.light
                        }
                    }}
                    onClick={() => {}}
                    color="inherit"
                >
                    <WorkspacePremiumIcon />

                </Avatar>
            )}

   

            {isMobile === true && !hidden && <ProfileSection />}
            {isMobile === false && <ProfileSection />}
        </Box>
    );
};

export default AdminHeader;