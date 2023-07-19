// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Hidden, Switch, Toolbar } from '@mui/material';
// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection/profileSection';
import { isMobile } from 'react-device-detect';
import { useEffect,useState  } from 'react';
import MobileSearch from '../MobileHeader/MobileSearch';
import SwitchTheme from 'layout/Customization/switchTheme';
import DisplayPoints from './PointsSection/displayPoints';
import { getUserAction } from 'store/actions/user.action';
import { useLocation } from 'react-router-dom';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({show, setShow,option1}) => {
    const theme = useTheme();
    const [mobile, setMobile] = useState();
    // console.log('isMobile', mobile);
    const [hidden, setHidden] = useState(false);
    const [setPoints , setDisplayPoints] = useState(0);
    const location = useLocation()
    console.log('location::',location)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('profile'));
        const userId = user?.user?._id;
        getUserAction(userId).then((data) =>{
            const userData = data.filter(x=>x._id === userId)
            if(userData[0]?.totalPoints){
                setDisplayPoints(userData[0].totalPoints) 
            }
            else{
                setDisplayPoints(0) 
            } 
            isMobile ? setMobile(true) : setMobile(false);   
        })
    },[location])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: theme.palette.background.paper,
                alignItems: 'center'

                // alignItems: 'center',
                // padding: '10px',
                // display: !show ? 'none' : 'flex'
            }}
        >
            {isMobile === true && !hidden && <LogoSection />}
            {isMobile === false && <LogoSection />}
            <Toolbar />
            {isMobile === true && <MobileSearch hidden={hidden} setHidden={setHidden} />}
            {isMobile === false && <SearchSection visibility={option1}/>}
            
            {isMobile === true && !hidden && <DisplayPoints setPoints={setPoints}/>}
            {isMobile === false && (<DisplayPoints setPoints={setPoints}/>
            )}

            {isMobile === true && !hidden && <ProfileSection />}
            {isMobile === false && <ProfileSection />}
        </Box>
    );
};

export default Header;
