import { useState, useRef, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SwitchTheme from 'layout/Customization/switchTheme';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness5Icon from '@mui/icons-material/Brightness5';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    ClickAwayListener,
    Divider,
    Grid,
    InputAdornment,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    OutlinedInput,
    Paper,
    Popper,
    Stack,
    Switch,
    Typography
} from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import decode from 'jwt-decode';
// import GoogleLogin from 'react-google-login';
 import { GoogleLogin } from '@react-oauth/google';


// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { IconLogout, IconSearch, IconSettings, IconUser ,IconUserPlus} from '@tabler/icons';

// Redux
import { loginAction } from 'store/actions/authentication/auth.action';

//css
import './profileSection.scss';
import { AdUnits } from '@mui/icons-material';
// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
 
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const [sdm, setSdm] = useState(true);
    const [value, setValue] = useState('');
    const [notification, setNotification] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
   
    /**
     * anchorRef is used on different componets and specifying one type leads to other components throwing an error
     * */

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const anchorRef = useRef(null);
    const handleLogout = async () => {
        dispatch({ type: 'LOGOUT' });

        //  window.location.reload();
        setUser(null);
        setOpen(false);
         navigate('/');
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleListItemClick = (event, index, route = '') => {
        setSelectedIndex(index);
        handleClose(event);

        if (route && route !== '') {
            navigate(route);
             //window.location.reload()
        }
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const prevOpen = useRef(open);
    // useEffect(() => {
    //     if (prevOpen.current === true && open === false) {
    //         anchorRef.current.focus();
    //     }

    //     prevOpen.current = open;
    // }, [open]);

    const googleSuccess = async (res) => {
        // alert('Success');     
        console.log('res',res)
        dispatch(loginAction(res.credential, navigate));
    };

    const googleFailure = () => {
        alert('Google Sign In was unsuccessfull. Send from FE.');
         console.log('Try  Again Later');
    };

    return (
        <>
            {user ? (
                <Chip
                    sx={{
                        height: '34px',
                        alignItems: 'center',
                        borderRadius: '28px',
                        transition: 'all .2s ease-in-out',
                        borderColor: theme.palette.primary.light,
                        backgroundColor: '#E4DFFF',
                        '&[aria-controls="menu-list-grow"], &:hover': {
                            borderColor: theme.palette.primary.main,
                            background: `${theme.palette.secondary.dark}!important`,
                            color: theme.palette.primary.light,
                            '& svg': {
                                stroke: theme.palette.primary.light
                            }
                        },
                        '& .MuiChip-label': {
                            lineHeight: 0
                        }
                    }}
                    icon={
                        <Avatar
                            src={user?.user?.picture}
                            alt={user?.user?.name}
                            sx={{
                                ...theme.typography.mediumAvatar,
                                margin: '8px 0 8px 7px !important',
                                width: 25,
                                height: 25,
                                cursor: 'pointer'
                            }}
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            color="inherit"
                        />
                    }
                    label={<IconSettings stroke={1.9} size="1.5rem" color={theme.palette.secondary.dark} />}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    color="primary"
                />
            ) : (
                <AnimateButton >
                 
                    <GoogleLogin    
                        //clientId="862901280150-r12s47uku8p1vutqnjhagfgkppk81qq2.apps.googleusercontent.com"
                        // render={(renderProps) => (
                        //     <Button
                        //         fullWidth
                        //         size="large"
                        //         sx={{
                        //             color: theme.palette.secondary.dark,
                        //             backgroundColor: '#8626ff',
                        //             color: '#fff',
                        //             borderRadius: '15px',
                        //             width: '70px',
                        //             fontFamily: 'Poppins',
                        //             fontWeight: '400',
                        //             fontSize: '12px',
                        //             ':hover': {
                        //                 backgroundColor: '#f2961d',
                        //                 color: '#fff'
                        //             }
                        //         }}
                        //         onClick={renderProps.onClick}
                        //         disabled={renderProps.disabled}
                        //     >
                        //         {/* <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                        //                 <img src={Google} alt="google" width={16} height={20} style={{ marginRight: matchDownSM ? 8 : 16, paddingTop: 5 }} />
                        //             </Box> */}
                        //         {/* Sign In */}
                        //     </Button>
                        // )}
                        // buttonText="Login"
                        // onSuccess={googleSuccess}
                        // onFailure={googleFailure}
                        
                        onSuccess={credentialResponse =>
                            googleSuccess(credentialResponse)
                        }
                        onError={(Error) => {
                            googleFailure(Error)
                        }}
                        useOneTap
                        cancel_on_tap_outside
                        size='medium'
                        shape='pill'
                        text='signin'
                        theme='filled_blue'
                        ux_mode='popup'
                        type='satandard'
                        
                    />

                </AnimateButton>
            )}

            <Popper
                placement="bottom-end"
                style={{ zIndex: 3 }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [3, 4]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard border={true} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                                    <Box sx={{ p: 2 }}>
                                        <Stack>
                                            <Stack margin={'10px'} direction="row" spacing={0.5} alignItems="center">
                                                <Typography variant="h3">Hello,</Typography>
                                                <Typography component="span" variant="h3" sx={{ fontWeight: 400 }}>
                                                    {user?.user?.name}
                                                </Typography>
                                            </Stack>
                                            {/* <Typography variant="h6">Project Admin</Typography> */}
                                        </Stack>
                                        {/* <OutlinedInput
                                            sx={{ width: '100%', pr: 1, pl: 2, my: 2 }}
                                            id="input-search-profile"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            placeholder="Search profile options"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
                                                </InputAdornment>
                                            }
                                            aria-describedby="search-helper-text"
                                            inputProps={{
                                                'aria-label': 'weight'
                                            }}
                                        /> */}
                                    </Box>
                                    <Divider/>
                                    <Box display={'flex'} alignItems={'center'} marginLeft={'10.5px'}>
                                      <Typography>Light Mode&nbsp;&nbsp;&nbsp;</Typography>
                                      <Brightness5Icon sx={{marginRight:'14px'}}/>  
                                      <SwitchTheme />
                                      <Typography sx={{marginLeft:'6px'}}>&nbsp;&nbsp;&nbsp;Dark Mode</Typography>
                                      <Brightness3Icon sx={{marginLeft:'3px',marginRight:'4px'}}/> 
                                    </Box>
                                    <Divider/>
                                    {/* <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 250px)', overflowX: 'hidden' }}> */}
                                        <Box sx={{ p: 1 }}>
                                            <List
                                                component="nav"
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: 350,
                                                    minWidth: 300,
                                                    backgroundColor: theme.palette.background.paper,
                                                    borderRadius: '10px',
                                                    [theme.breakpoints.down('md')]: {
                                                        minWidth: '100%'
                                                    },
                                                    '& .MuiListItemButton-root': {
                                                        mt: 0
                                                    }
                                                }}
                                            >
                                            <Stack>
                                            {user?.user?.isAdmin?(
                                                <ListItemButton
                                                    className='listItemButton'
                                                    sx={{ borderRadius: `${customization.borderRadius}px` }}
                                                     selected={selectedIndex === 5}
                                                    onClick={(event) => handleListItemClick(event, 5, '/admin-dashboard/admin')}
                                                >
                                                    <ListItemIcon>                        
                                                        <IconUserPlus v stroke={1.5} size="1.3rem" />
                                                        <Typography fontSize={15}>&nbsp;&nbsp;&nbsp;Admin Panel</Typography>                                                     
                                                        {/* <ListItemText className='listItemText' primary={<Typography variant="body2">Admin Panel</Typography>} /> */}
                                                    </ListItemIcon>
                                                    
                                                </ListItemButton>):(
                                                <></>
                                                )
                                                }
                                            </Stack> 

                                                <ListItemButton
                                                    className='listItemButton'
                                                    sx={{ borderRadius: `${customization.borderRadius}px` }}
                                                    selected={selectedIndex === 0}
                                                    onClick={(event) => handleListItemClick(event, 0, '/user/account-profile')}
                                                >
                                                    <ListItemIcon>
                                                        <IconSettings stroke={1.5} size="1.3rem" />
                                                        <Typography fontSize={15}>&nbsp;&nbsp;&nbsp;Account Settings</Typography>
                                                    </ListItemIcon>
                                                    {/* <ListItemText className='listItemText' primary={<Typography variant="body2">Account Settings</Typography>} /> */}
                                                </ListItemButton>
                                                {/* <ListItemButton
                                                    className='listItemButton'
                                                    sx={{ borderRadius: `${customization.borderRadius}px` }}
                                                    selected={selectedIndex === 1}
                                                    onClick={(event) => handleListItemClick(event, 1, '/user/social-profile/posts')}
                                                >
                                                    <ListItemIcon>
                                                        <IconUser stroke={1.5} size="1.3rem" />
                                                        <Typography fontSize={15}>&nbsp;&nbsp;&nbsp;Social Profile</Typography>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        className='listItemText'
                                                        primary={
                                                            <Grid container spacing={1} justifyContent="space-between">
                                                                <Grid item>
                                                                    <Typography variant="body2"></Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Chip
                                                                        label="02"
                                                                        size="small"
                                                                        sx={{
                                                                            bgcolor: theme.palette.warning.dark,
                                                                            color: theme.palette.background.default
                                                                        }}
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        }
                                                    />
                                                </ListItemButton> */}
                                                <ListItemButton
                                                    className='listItemButton'
                                                    sx={{ borderRadius: `${customization.borderRadius}px` }}
                                                    selected={selectedIndex === 4}
                                                    onClick={handleLogout}
                                                >
                                                    <ListItemIcon>
                                                        <IconLogout stroke={1.5} size="1.3rem" />
                                                        <Typography fontSize={15}>&nbsp;&nbsp;&nbsp;Logout</Typography>
                                                    </ListItemIcon>
                                                    {/* <ListItemText className='listItemText' primary={<Typography variant="body2">Logout</Typography>} /> */}
                                                </ListItemButton>
                                            </List>
                                        </Box>
                                    {/* </PerfectScrollbar> */}
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </>
    );
};

export default ProfileSection;
