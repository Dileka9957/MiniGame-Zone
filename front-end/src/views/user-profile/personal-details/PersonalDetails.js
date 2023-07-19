import React, { useState } from 'react';
import { Card, Box, CardHeader, Divider, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid} from '@mui/material';
import { useTheme } from '@emotion/react';
import countries from "./countries";
import { updateUserAction } from 'store/actions/user.action';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const PersonalDetails = ({ user, userData }) => {
  console.log('user',userData)
    const theme = useTheme();
    const [newUserData,setUserData]= useState(user)
    const [newName,setName] = useState(user?.name)
    const [newCountry,setCountry] = useState(user?.country)
    const [newAboutMe,setAboutMe ] = useState(user?.aboutMe)
    const [newAddress,setAddress ] = useState(user?.address)
    const [newContactPhone,setContactPhone ] = useState(user?.contactPhone)

    const [notify, setnotify] = useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const handleUser = () => {
        const _id = user?._id
        updateUserAction(_id,newName, newCountry, newAboutMe, newAddress, newContactPhone)
        const newuser ={
            _id:_id,
            name:newName,
            country:newCountry,
            aboutMe:newAboutMe,
            address:newAddress,
            contactPhone:newContactPhone
        }
        setUserData(newuser);
        setnotify(true)   

    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setnotify(false);
      }; 
  

    return (
        <>
        
            <Snackbar open={notify}  autoHideDuration={2500} onClose={handleClose}>        
                <Alert severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                        User details Successfully Updated !
                </Alert>
            </Snackbar>
          
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
                        paddingLeft: '10px',
                        paddingRight: '10px',
                    }} >

                        <CardHeader
                            title="Personal Information"
                        />
                        <Divider />

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        variant="outlined"
                                        sx={{ marginRight: '5px' }}
                                        //error={newName}
                                        value={newName}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <FormControl fullWidth sx={{}}>
                                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                        <Select

                                            value={newCountry}
                                            label="Country"
                                            onChange={e => setCountry( e.target.value )}
                                        >
                                            {countries.map((country, i) => (
                                                <MenuItem key={i} value={country.name}>{country.name}</MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>

                        <TextField
                            id="outlined-multiline-static"
                            label="About Me"
                            multiline
                            rows={4}
                            fullWidth
                            //error={!userData?.user?.aboutMe}
                            value={newAboutMe}
                            onChange={(e) => setAboutMe( e.target.value )}
                            sx={{ marginTop: '20px', }}
                        />


                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    {/* ................................Part2...................................... */}
                    <Card sx={{
                        mt: 3,
                        border: '1px solid',
                        borderColor: theme.palette.primary.light,
                        ':hover': {
                            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                        },
                        // height: '300px',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                    }} >
                        <CardHeader
                            title="Contact Information"
                        />
                        <Divider />

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px', }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                    fullWidth
                                        label="Contact Phone"
                                        variant="outlined"
                                       // error={!userData?.user?.contactPhone}
                                        value={newContactPhone}
                                        sx={{zIndex:0}}
                                        onChange={(e) => setContactPhone( e.target.value )}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                    fullWidth
                                        disabled
                                        label="Email"
                                        variant="outlined"
                                        value={userData?.user?.email}
                                        // onChange={(e) => setEmail( e.target.value )}
                                        sx={{zIndex:0}}
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        {/* <TextField fullWidth label="Protfolio Url" defaultValue="https://demo.com" variant="outlined" sx={{ marginTop: '20px', }} /> */}

                        <TextField
                            id="Address"
                            label="Address"
                            multiline
                            rows={4}
                            fullWidth
                            //error={!userData?.user?.address}
                            value={newAddress}
                            onChange={(e) => setAddress( e.target.value )}
                            sx={{ marginTop: '20px', marginBottom: '30px',zIndex:0 }}
                        />
                    </Card>
                </Grid>
            </Grid>

            <Button variant="contained" color="secondary" sx={{ marginTop: '30px', width: '200px' }} onClick={handleUser} >Save details</Button>
        </>

    )
}

export default PersonalDetails
