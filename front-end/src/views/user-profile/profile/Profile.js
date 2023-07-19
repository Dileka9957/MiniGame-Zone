import { Avatar, Card, CardHeader, IconButton, Divider, Typography, Skeleton, Link, Tooltip, Grid } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useState } from 'react'

import SubCard from '../../../ui-component/cards/SubCard'
import './Profile.scss'

import { IconBrandTelegram, IconMail, IconPhone, IconLocation, IconDotsVertical, IconEdit, IconCopy } from '@tabler/icons';
import { Box, color } from '@mui/system';

import { useTheme } from '@emotion/react';
import PersonalDetails from '../personal-details/PersonalDetails';

const Profile = ({ userData,user }) => {
console.log('user:::',user)
    const [copied, setCopied] = useState(false);

    const theme = useTheme();
    const getUrl = window.location.origin

    const refURL = `${getUrl}/ref?id=${user?._id}`

    const updateClipboard = () => {
        navigator.clipboard.writeText(refURL)
        setCopied(true);
    }

    return (
        <>
            {!userData?.user?._id ? <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>


                {/* ................................Part1...................................... */}
                <Card sx={{
                    mt: 3, width: '38%',
                    border: '1px solid',
                    borderColor: theme.palette.primary.light,
                    ':hover': {
                        boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                    },
                    // height: '300px',

                }} >
                    <CardHeader
                        avatar={
                            <Skeleton variant="circular" width={40} height={40} />
                        }
                        title={<Skeleton variant="text" />}
                    // subheader="Web Developer"
                    />
                    <Divider />

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Card sx={{ width: '90%', marginTop: '25px', ':hover': { bgcolor: 'secondary.light' }, }} >
                            <div className='profile-box'>
                                <div className='profile-box-left'>
                                    <IconMail />
                                    <p>Email</p>
                                </div>
                                <p className='profile-box-right'> <Skeleton variant="text" height={45} width={210} /></p>
                            </div>
                            <Divider />
                        </Card>
                        <Card sx={{ width: '90%', ':hover': { bgcolor: 'secondary.light' }, }} >
                            <div className='profile-box'>
                                <div className='profile-box-left'>
                                    <IconPhone />
                                    <p>Phone</p>
                                </div>
                                <p className='profile-box-right'> <Skeleton variant="text" height={45} width={210} /></p>
                            </div>
                            <Divider />
                        </Card>
                        <Card sx={{ width: '90%', marginBottom: '25px', ':hover': { bgcolor: 'secondary.light' }, }} >

                            <div className='profile-box'>
                                <div className='profile-box-left'>
                                    <IconLocation />
                                    <p>Location</p>
                                </div>
                                <p className='profile-box-right'> <Skeleton variant="text" height={45} width={210} /></p>
                            </div>
                        </Card>
                    </Box>
                </Card>

                {/* ................................Part2...................................... */}
                <Card sx={{
                    mt: 3, width: '60%',
                    border: '1px solid',
                    borderColor: theme.palette.primary.light,
                    ':hover': {
                        boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                    },

                }} >

                    <CardHeader

                        action={
                            <IconButton aria-label="settings">
                                <IconEdit />
                            </IconButton>
                        }
                        title={<Skeleton variant="text" width={210} />}
                    />
                    <Divider />

                    <Typography sx={{ marginLeft: '15px', marginTop: '20px', paddingRight: '15px' }}>
                        <Skeleton variant="text" height={80} />
                    </Typography>

                    <Typography variant="h4" sx={{ marginLeft: '15px', marginTop: '20px', marginBottom: '10px' }}>
                        Personal Details
                    </Typography>

                    <Divider />


                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginTop: '10px', marginLeft: '20px', }}>
                        <Typography variant="h5" sx={{ width: '150px' }}>
                            Name
                        </Typography>
                        <IconDotsVertical />

                        <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                            <Skeleton variant="text" width={210} />
                        </Typography>
                    </Box>

                    {/* <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', }}>
                     <Typography variant="h5" sx={{ width: '150px' }}>
                         Fathers Name
                     </Typography>
                     <IconDotsVertical />
 
                     <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                         Mr. Deepen Handgun
                     </Typography>
                 </Box> */}

                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', }}>
                        <Typography variant="h5" sx={{ width: '150px' }}>
                            Address
                        </Typography>
                        <IconDotsVertical />

                        <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                            <Skeleton variant="text" width={210} />
                        </Typography>
                    </Box>

                    {/* <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', }}>
                     <Typography variant="h5" sx={{ width: '150px' }}>
                         Zip Code
                     </Typography>
                     <IconDotsVertical />
 
                     <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                         12345
                     </Typography>
                 </Box> */}

                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', }}>
                        <Typography variant="h5" sx={{ width: '150px' }}>
                            Phone
                        </Typography>
                        <IconDotsVertical />

                        <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                            <Skeleton variant="text" width={210} />
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', }}>
                        <Typography variant="h5" sx={{ width: '150px' }}>
                            Email
                        </Typography>
                        <IconDotsVertical />

                        <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                            <Skeleton variant="text" width={210} />
                        </Typography>
                    </Box>

                    {/* <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', marginBottom: '10px' }}>
                     <Typography variant="h5" sx={{ width: '150px' }}>
                         Website
                     </Typography>
                     <IconDotsVertical />
 
                     <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                         http://example.com
                     </Typography>
                 </Box> */}
                </Card>
            </Box> :
            
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={12} md={6}>
                        {/* ................................Part1...................................... */}
                        <Card sx={{
                            mt: 3,
                            border: '1px solid',
                            borderColor: theme.palette.primary.light,
                            ':hover': {
                                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                            },
                            // height: '300px',

                        }} >
                            <CardHeader
                                avatar={
                                    // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    //     R
                                    // </Avatar>
                                    <Avatar
                                        src={user?.picture}
                                        alt={user?.name}
                                        sx={{
                                            cursor: 'pointer'
                                        }}
                                    // ref={anchorRef}
                                    // aria-controls={open ? 'menu-list-grow' : undefined}
                                    // aria-haspopup="true"
                                    // color="inherit"
                                    />
                                }
                                // action={
                                //     <IconButton aria-label="settings">
                                //         <IconBrandTelegram />
                                //     </IconButton>
                                // }
                                title={userData?.user?.name}
                            // subheader="Web Developer"
                            />
                            <Divider />
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Card sx={{ width: '90%', marginTop: '25px', ':hover': { bgcolor: 'secondary.light' ,color:'#6c25be' }, }} >
                                    <div className='profile-box'>
                                        <div className='profile-box-left'>
                                            <IconMail />
                                            <p>Email</p>
                                        </div>
                                        <p className='profile-box-right'>{userData?.user?.email}</p>
                                    </div>
                                    <Divider />
                                </Card>
                                <Card sx={{ width: '90%', ':hover': { bgcolor: 'secondary.light',color:'#6c25be' }, }} >
                                    <div className='profile-box'>
                                        <div className='profile-box-left'>
                                            <IconPhone />
                                            <p>Phone</p>
                                        </div>
                                        <p className='profile-box-right'>{user?.contactPhone}</p>
                                    </div>
                                    <Divider />
                                </Card>
                                <Card sx={{ width: '90%', marginBottom: '25px', ':hover': { bgcolor: 'secondary.light',color:'#6c25be' }, }} >

                                    <div className='profile-box'>
                                        <div className='profile-box-left'>
                                            <IconLocation />
                                            <p>Location</p>
                                        </div>
                                        <p className='profile-box-right'>{user?.country}</p>
                                    </div>
                                </Card>
                            </Box>
                            <Typography variant="h2" sx={{ textAlign: 'center', marginTop: '10px' }}>
                                {user?.totalPoints ? `${user.totalPoints}` : '0'}
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                POINTS
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} >
                        {/* ................................Part2...................................... */}
                        <Card sx={{
                            mt: 3,
                            border: '1px solid',
                            borderColor: theme.palette.primary.light,
                            ':hover': {
                                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                            },

                        }} >

                            {/* <CardHeader

                                action={
                                    <IconButton aria-label="settings"  containerElement={<PersonalDetails/>}>
                                        <IconEdit/>
                                    </IconButton>
                                }
                                title={userData?.user?.name}
                            /> */}
                            <Divider />

                            <Typography sx={{ marginLeft: '15px', marginTop: '20px' }}>
                                {userData?.user?.aboutMe}
                            </Typography>

                            <Typography variant="h4" sx={{ marginLeft: '15px', marginTop: '20px', marginBottom: '10px' }}>
                                Personal Details
                            </Typography>

                            <Divider />


                            <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginTop: '10px', marginLeft: '20px', }}>
                                <Typography variant="h5" sx={{ width: '150px' }}>
                                    Name
                                </Typography>
                                <IconDotsVertical />

                                <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                                    {userData?.user?.name}
                                </Typography>
                            </Box>

                            {/* <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', }}>
                     <Typography variant="h5" sx={{ width: '150px' }}>
                         Fathers Name
                     </Typography>
                     <IconDotsVertical />
 
                     <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                         Mr. Deepen Handgun
                     </Typography>
                 </Box> */}

                            <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', }}>
                                <Typography variant="h5" sx={{ width: '150px' }}>
                                    Address
                                </Typography>
                                <IconDotsVertical />

                                <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                                    {user?.country}
                                </Typography>
                            </Box>

                            {/* <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', }}>
                     <Typography variant="h5" sx={{ width: '150px' }}>
                         Zip Code
                     </Typography>
                     <IconDotsVertical />
 
                     <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                         12345
                     </Typography>
                 </Box> */}

                            <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', }}>
                                <Typography variant="h5" sx={{ width: '150px' }}>
                                    Phone
                                </Typography>
                                <IconDotsVertical />

                                <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                                    {user?.contactPhone}
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', }}>
                                <Typography variant="h5" sx={{ width: '150px' }}>
                                    Email
                                </Typography>
                                <IconDotsVertical />

                                <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                                    {userData?.user?.email}
                                </Typography>
                            </Box>

                            {/* <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginLeft: '20px', marginBottom: '10px' }}>
                     <Typography variant="h5" sx={{ width: '150px' }}>
                         Website
                     </Typography>
                     <IconDotsVertical />
 
                     <Typography variant="body1" sx={{ marginLeft: '35px' }}>
                         http://example.com
                     </Typography>
                 </Box> */}

                            <Card sx={{
                                m: 2, width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                border: '1px solid',
                                borderColor: theme.palette.primary.light,
                                ':hover': {
                                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                                },

                            }} >
                                <Typography variant="h5" sx={{ paddingLeft: '10px' }}>
                                    Your Referral
                                </Typography>
                                <IconDotsVertical />
                                <Link underline="none" href={refURL} variant="body1" sx={{ flex:1 }}>
                                    {refURL}
                                </Link>
                                <Tooltip title={copied ? `copied` : `copy`} arrow>
                                    <IconButton aria-label="settings" sx={{  }} onClick={() => updateClipboard()}>
                                        <IconCopy />
                                    </IconButton>
                                </Tooltip>
                            </Card>
                        </Card>
                    </Grid>
                </Grid>}

        </>
    )
}

export default Profile
