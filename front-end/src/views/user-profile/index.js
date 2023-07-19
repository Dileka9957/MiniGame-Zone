import React, { useEffect, useState } from 'react';
import swal from 'sweetalert'

import { Typography, Card, Tabs, Tab, Box } from '@mui/material';
import { IconUser, IconFileAnalytics, IconMail } from '@tabler/icons';

import MainCard from '../../ui-component/cards/MainCard';
import Profile from './profile/Profile';
// import PersonalDetails from './personal-details/PersonalDetails';
// import axios from "../../utils/axios";

import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import Settings from './Settings/Settings';

import PersonalDetails from './personal-details/PersonalDetails';
import { getUserAction, updateUserAction } from 'store/actions/user.action';

import { useTheme } from '@emotion/react';
const Index = () => {

    const theme = useTheme();

    const [value, setValue] = useState(0);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [userData, setUserData] = useState()
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

   // const { newData } = useSelector((state) => state.authReducer); // This is Working.

    const userId = user?.user?._id
   

    // console.log('userData', newData);
    
    // useEffect(() => {
    //     if (!user) navigate('/404');
    // }, [navigate, user ])

    // useEffect(() => {

    //     setUser(JSON.parse(localStorage.getItem('profile')))

    // }, [location]); //{user?.user.name}

    useEffect(() => {
        // axios.get(`/user/${userId}/detail`)
        //     .then(response => {
        //         const newUser = response?.data
        //         // console.log('userData-get', response);
        //         setUserData(newUser)
        //         dispatch({ type: 'NEWDATA', data: { newUser } });
        //     })

        try {
            getUserAction(userId).then((data) => {
            
               const userdetails = data.filter(x=>x._id === userId)
               console.log('userData',userdetails)
               setUserData(...userdetails)

            })
        } catch (error) {
            console.log('err user-profile', error)
        }
    }, [userId])

    const handleChange = (event, newValue) => {  // This for change tabs
        setValue(newValue);
    };

    const handleUser = async (e) => {
        e.preventDefault();

        // const id = userData._id
        // console.log('userData', id, userData)

        try {
             //updateUserAction(userData, userId, swal) 
        } catch (error) {
            console.log('err update person details', error)
        }


        // await axios.patch(`/user/${id}`,
        //     userData
        // ).then(function (response) {
        //     console.log('response', response?.status);

        //     if (response?.status === 200) {
        //         swal("success", "Your Data Saved...", "success", {
        //             buttons: false,
        //             timer: 1000,
        //         })
        //     } else {
        //         swal("Oops", "OHH Try at another time ...", "error", {
        //             buttons: false,
        //             timer: 3000,
        //         })
        //     }
        // }).catch(function (error) {
        //     alert(error);
        // })

    }

    return (
        <div>
            <Card sx={{ marginBottom: '10px' }}>
                <Typography variant="h2" ml={4} pt={1} pb={1} >Account Profile</Typography>
            </Card>

            <Card>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="icon position tabs example"
                        >
                            <Tab icon={<IconUser />} label="Profile" sx={{color:theme.palette.text.dark}}/>
                            <Tab icon={<IconFileAnalytics />} label="Personal Details" sx={{color:theme.palette.text.dark}} />
                        </Tabs>
                    </Box>

                    {value === 0 && 
                    <Profile
                     user={userData}
                     userData={user}
                        
                    />
                   
                    }

                    {value === 1 && 
                    <PersonalDetails
                         user={userData}
                        userData={user}
                        setUserData={setUserData}
                        handleUser={handleUser}
                    />
                    // <Typography>GG01</Typography>
                    }

                </Box>

            </Card>
        </div>




    )
}

export default Index